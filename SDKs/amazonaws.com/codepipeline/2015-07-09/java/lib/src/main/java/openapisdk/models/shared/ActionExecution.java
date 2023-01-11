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
 * ActionExecution
 * Represents information about the run of an action.
**/
public class ActionExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionExecutionId")
    public String actionExecutionId;
    public ActionExecution withActionExecutionId(String actionExecutionId) {
        this.actionExecutionId = actionExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDetails")
    public ErrorDetails errorDetails;
    public ActionExecution withErrorDetails(ErrorDetails errorDetails) {
        this.errorDetails = errorDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalExecutionId")
    public String externalExecutionId;
    public ActionExecution withExternalExecutionId(String externalExecutionId) {
        this.externalExecutionId = externalExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalExecutionUrl")
    public String externalExecutionUrl;
    public ActionExecution withExternalExecutionUrl(String externalExecutionUrl) {
        this.externalExecutionUrl = externalExecutionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStatusChange")
    public OffsetDateTime lastStatusChange;
    public ActionExecution withLastStatusChange(OffsetDateTime lastStatusChange) {
        this.lastStatusChange = lastStatusChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedBy")
    public String lastUpdatedBy;
    public ActionExecution withLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentComplete")
    public Long percentComplete;
    public ActionExecution withPercentComplete(Long percentComplete) {
        this.percentComplete = percentComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ActionExecutionStatusEnum status;
    public ActionExecution withStatus(ActionExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public ActionExecution withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public ActionExecution withToken(String token) {
        this.token = token;
        return this;
    }
}