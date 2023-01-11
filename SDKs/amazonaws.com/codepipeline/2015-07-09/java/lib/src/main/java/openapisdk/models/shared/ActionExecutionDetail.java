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
 * ActionExecutionDetail
 * Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. 
**/
public class ActionExecutionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionExecutionId")
    public String actionExecutionId;
    public ActionExecutionDetail withActionExecutionId(String actionExecutionId) {
        this.actionExecutionId = actionExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public ActionExecutionDetail withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public ActionExecutionInput input;
    public ActionExecutionDetail withInput(ActionExecutionInput input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public ActionExecutionDetail withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public ActionExecutionOutput output;
    public ActionExecutionDetail withOutput(ActionExecutionOutput output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public ActionExecutionDetail withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineVersion")
    public Long pipelineVersion;
    public ActionExecutionDetail withPipelineVersion(Long pipelineVersion) {
        this.pipelineVersion = pipelineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stageName")
    public String stageName;
    public ActionExecutionDetail withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public ActionExecutionDetail withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ActionExecutionStatusEnum status;
    public ActionExecutionDetail withStatus(ActionExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
}