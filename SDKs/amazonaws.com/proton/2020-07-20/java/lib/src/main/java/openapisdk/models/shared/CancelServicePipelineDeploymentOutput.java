package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelServicePipelineDeploymentOutput {
    @JsonProperty("pipeline")
    public ServicePipeline pipeline;
    public CancelServicePipelineDeploymentOutput withPipeline(ServicePipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}