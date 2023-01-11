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
 * DetectMitigationActionExecution
 *  Describes which mitigation actions should be executed. 
**/
public class DetectMitigationActionExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public DetectMitigationActionExecution withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public DetectMitigationActionExecution withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("executionEndDate")
    public OffsetDateTime executionEndDate;
    public DetectMitigationActionExecution withExecutionEndDate(OffsetDateTime executionEndDate) {
        this.executionEndDate = executionEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("executionStartDate")
    public OffsetDateTime executionStartDate;
    public DetectMitigationActionExecution withExecutionStartDate(OffsetDateTime executionStartDate) {
        this.executionStartDate = executionStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DetectMitigationActionExecution withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DetectMitigationActionExecutionStatusEnum status;
    public DetectMitigationActionExecution withStatus(DetectMitigationActionExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public DetectMitigationActionExecution withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public DetectMitigationActionExecution withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationId")
    public String violationId;
    public DetectMitigationActionExecution withViolationId(String violationId) {
        this.violationId = violationId;
        return this;
    }
}