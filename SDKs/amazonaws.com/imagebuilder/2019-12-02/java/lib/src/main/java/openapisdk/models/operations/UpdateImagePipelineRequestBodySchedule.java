package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateImagePipelineRequestBodySchedule
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
public class UpdateImagePipelineRequestBodySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionStartCondition")
    public openapisdk.models.shared.PipelineExecutionStartConditionEnum pipelineExecutionStartCondition;
    public UpdateImagePipelineRequestBodySchedule withPipelineExecutionStartCondition(openapisdk.models.shared.PipelineExecutionStartConditionEnum pipelineExecutionStartCondition) {
        this.pipelineExecutionStartCondition = pipelineExecutionStartCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleExpression")
    public String scheduleExpression;
    public UpdateImagePipelineRequestBodySchedule withScheduleExpression(String scheduleExpression) {
        this.scheduleExpression = scheduleExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public UpdateImagePipelineRequestBodySchedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}