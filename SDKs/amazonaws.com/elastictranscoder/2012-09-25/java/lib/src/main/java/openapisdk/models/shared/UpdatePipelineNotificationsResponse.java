package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePipelineNotificationsResponse
 * The <code>UpdatePipelineNotificationsResponse</code> structure.
**/
public class UpdatePipelineNotificationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pipeline")
    public Pipeline pipeline;
    public UpdatePipelineNotificationsResponse withPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}