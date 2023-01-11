package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartImportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public StartImportResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importId")
    public String importId;
    public StartImportResponse withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importStatus")
    public ImportStatusEnum importStatus;
    public StartImportResponse withImportStatus(ImportStatusEnum importStatus) {
        this.importStatus = importStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeStrategy")
    public MergeStrategyEnum mergeStrategy;
    public StartImportResponse withMergeStrategy(MergeStrategyEnum mergeStrategy) {
        this.mergeStrategy = mergeStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceSpecification")
    public ImportResourceSpecification resourceSpecification;
    public StartImportResponse withResourceSpecification(ImportResourceSpecification resourceSpecification) {
        this.resourceSpecification = resourceSpecification;
        return this;
    }
}