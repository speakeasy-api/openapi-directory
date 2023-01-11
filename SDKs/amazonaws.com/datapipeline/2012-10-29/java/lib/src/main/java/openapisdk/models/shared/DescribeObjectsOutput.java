package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeObjectsOutput
 * Contains the output of DescribeObjects.
**/
public class DescribeObjectsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMoreResults")
    public Boolean hasMoreResults;
    public DescribeObjectsOutput withHasMoreResults(Boolean hasMoreResults) {
        this.hasMoreResults = hasMoreResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marker")
    public String marker;
    public DescribeObjectsOutput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonProperty("pipelineObjects")
    public PipelineObject[] pipelineObjects;
    public DescribeObjectsOutput withPipelineObjects(PipelineObject[] pipelineObjects) {
        this.pipelineObjects = pipelineObjects;
        return this;
    }
}