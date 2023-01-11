package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateExportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public UpdateExportResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportId")
    public String exportId;
    public UpdateExportResponse withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportStatus")
    public ExportStatusEnum exportStatus;
    public UpdateExportResponse withExportStatus(ExportStatusEnum exportStatus) {
        this.exportStatus = exportStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormat")
    public ImportExportFileFormatEnum fileFormat;
    public UpdateExportResponse withFileFormat(ImportExportFileFormatEnum fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public UpdateExportResponse withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceSpecification")
    public ExportResourceSpecification resourceSpecification;
    public UpdateExportResponse withResourceSpecification(ExportResourceSpecification resourceSpecification) {
        this.resourceSpecification = resourceSpecification;
        return this;
    }
}