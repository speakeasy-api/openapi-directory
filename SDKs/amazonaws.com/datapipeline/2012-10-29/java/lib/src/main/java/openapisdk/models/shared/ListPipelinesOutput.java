package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPipelinesOutput
 * Contains the output of ListPipelines.
**/
public class ListPipelinesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMoreResults")
    public Boolean hasMoreResults;
    public ListPipelinesOutput withHasMoreResults(Boolean hasMoreResults) {
        this.hasMoreResults = hasMoreResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marker")
    public String marker;
    public ListPipelinesOutput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonProperty("pipelineIdList")
    public PipelineIdName[] pipelineIdList;
    public ListPipelinesOutput withPipelineIdList(PipelineIdName[] pipelineIdList) {
        this.pipelineIdList = pipelineIdList;
        return this;
    }
}