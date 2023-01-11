package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImagePipelineRequestBodySchedule
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
public class CreateImagePipelineRequestBodySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionStartCondition")
    public openapisdk.models.shared.PipelineExecutionStartConditionEnum pipelineExecutionStartCondition;
    public CreateImagePipelineRequestBodySchedule withPipelineExecutionStartCondition(openapisdk.models.shared.PipelineExecutionStartConditionEnum pipelineExecutionStartCondition) {
        this.pipelineExecutionStartCondition = pipelineExecutionStartCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleExpression")
    public String scheduleExpression;
    public CreateImagePipelineRequestBodySchedule withScheduleExpression(String scheduleExpression) {
        this.scheduleExpression = scheduleExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public CreateImagePipelineRequestBodySchedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}