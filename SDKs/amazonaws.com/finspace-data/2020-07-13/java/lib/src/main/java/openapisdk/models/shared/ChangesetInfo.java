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
 * ChangesetInfo
 * A changeset is unit of data in a dataset.
**/
public class ChangesetInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeType")
    public ChangeTypeEnum changeType;
    public ChangesetInfo withChangeType(ChangeTypeEnum changeType) {
        this.changeType = changeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changesetArn")
    public String changesetArn;
    public ChangesetInfo withChangesetArn(String changesetArn) {
        this.changesetArn = changesetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changesetLabels")
    public java.util.Map<String, String> changesetLabels;
    public ChangesetInfo withChangesetLabels(java.util.Map<String, String> changesetLabels) {
        this.changesetLabels = changesetLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createTimestamp")
    public OffsetDateTime createTimestamp;
    public ChangesetInfo withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;
    public ChangesetInfo withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorInfo")
    public ErrorInfo errorInfo;
    public ChangesetInfo withErrorInfo(ErrorInfo errorInfo) {
        this.errorInfo = errorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatParams")
    public java.util.Map<String, String> formatParams;
    public ChangesetInfo withFormatParams(java.util.Map<String, String> formatParams) {
        this.formatParams = formatParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatType")
    public FormatTypeEnum formatType;
    public ChangesetInfo withFormatType(FormatTypeEnum formatType) {
        this.formatType = formatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChangesetInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceParams")
    public java.util.Map<String, String> sourceParams;
    public ChangesetInfo withSourceParams(java.util.Map<String, String> sourceParams) {
        this.sourceParams = sourceParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceType")
    public SourceTypeEnum sourceType;
    public ChangesetInfo withSourceType(SourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChangesetStatusEnum status;
    public ChangesetInfo withStatus(ChangesetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedByChangesetId")
    public String updatedByChangesetId;
    public ChangesetInfo withUpdatedByChangesetId(String updatedByChangesetId) {
        this.updatedByChangesetId = updatedByChangesetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatesChangesetId")
    public String updatesChangesetId;
    public ChangesetInfo withUpdatesChangesetId(String updatesChangesetId) {
        this.updatesChangesetId = updatesChangesetId;
        return this;
    }
}