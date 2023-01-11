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
 * ActivatePipelineInput
 * Contains the parameters for ActivatePipeline.
**/
public class ActivatePipelineInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterValues")
    public ParameterValue[] parameterValues;
    public ActivatePipelineInput withParameterValues(ParameterValue[] parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    }
    @JsonProperty("pipelineId")
    public String pipelineId;
    public ActivatePipelineInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTimestamp")
    public OffsetDateTime startTimestamp;
    public ActivatePipelineInput withStartTimestamp(OffsetDateTime startTimestamp) {
        this.startTimestamp = startTimestamp;
        return this;
    }
}