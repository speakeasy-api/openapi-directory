package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateSuiteDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public CreateSuiteDefinitionResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionArn")
    public String suiteDefinitionArn;
    public CreateSuiteDefinitionResponse withSuiteDefinitionArn(String suiteDefinitionArn) {
        this.suiteDefinitionArn = suiteDefinitionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionId")
    public String suiteDefinitionId;
    public CreateSuiteDefinitionResponse withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionName")
    public String suiteDefinitionName;
    public CreateSuiteDefinitionResponse withSuiteDefinitionName(String suiteDefinitionName) {
        this.suiteDefinitionName = suiteDefinitionName;
        return this;
    }
}