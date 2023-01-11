package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribePipelinesOutput
 * Contains the output of DescribePipelines.
**/
public class DescribePipelinesOutput {
    @JsonProperty("pipelineDescriptionList")
    public PipelineDescription[] pipelineDescriptionList;
    public DescribePipelinesOutput withPipelineDescriptionList(PipelineDescription[] pipelineDescriptionList) {
        this.pipelineDescriptionList = pipelineDescriptionList;
        return this;
    }
}