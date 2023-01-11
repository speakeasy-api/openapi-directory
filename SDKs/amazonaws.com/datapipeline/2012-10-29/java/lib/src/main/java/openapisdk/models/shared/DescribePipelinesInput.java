package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribePipelinesInput
 * Contains the parameters for DescribePipelines.
**/
public class DescribePipelinesInput {
    @JsonProperty("pipelineIds")
    public String[] pipelineIds;
    public DescribePipelinesInput withPipelineIds(String[] pipelineIds) {
        this.pipelineIds = pipelineIds;
        return this;
    }
}