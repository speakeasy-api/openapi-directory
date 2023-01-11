package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionStartCondition")
    public PipelineExecutionStartConditionEnum pipelineExecutionStartCondition;
    public Schedule withPipelineExecutionStartCondition(PipelineExecutionStartConditionEnum pipelineExecutionStartCondition) {
        this.pipelineExecutionStartCondition = pipelineExecutionStartCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleExpression")
    public String scheduleExpression;
    public Schedule withScheduleExpression(String scheduleExpression) {
        this.scheduleExpression = scheduleExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Schedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}