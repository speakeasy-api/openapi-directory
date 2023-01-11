package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ExportInfo
 * Information regarding the export status of discovered data. The value is an array of objects.
**/
public class ExportInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationsDownloadUrl")
    public String configurationsDownloadUrl;
    public ExportInfo withConfigurationsDownloadUrl(String configurationsDownloadUrl) {
        this.configurationsDownloadUrl = configurationsDownloadUrl;
        return this;
    }
    @JsonProperty("exportId")
    public String exportId;
    public ExportInfo withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("exportRequestTime")
    public OffsetDateTime exportRequestTime;
    public ExportInfo withExportRequestTime(OffsetDateTime exportRequestTime) {
        this.exportRequestTime = exportRequestTime;
        return this;
    }
    @JsonProperty("exportStatus")
    public ExportStatusEnum exportStatus;
    public ExportInfo withExportStatus(ExportStatusEnum exportStatus) {
        this.exportStatus = exportStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTruncated")
    public Boolean isTruncated;
    public ExportInfo withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedEndTime")
    public OffsetDateTime requestedEndTime;
    public ExportInfo withRequestedEndTime(OffsetDateTime requestedEndTime) {
        this.requestedEndTime = requestedEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedStartTime")
    public OffsetDateTime requestedStartTime;
    public ExportInfo withRequestedStartTime(OffsetDateTime requestedStartTime) {
        this.requestedStartTime = requestedStartTime;
        return this;
    }
    @JsonProperty("statusMessage")
    public String statusMessage;
    public ExportInfo withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}