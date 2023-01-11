package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeObjectsInput
 * Contains the parameters for DescribeObjects.
**/
public class DescribeObjectsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluateExpressions")
    public Boolean evaluateExpressions;
    public DescribeObjectsInput withEvaluateExpressions(Boolean evaluateExpressions) {
        this.evaluateExpressions = evaluateExpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marker")
    public String marker;
    public DescribeObjectsInput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonProperty("objectIds")
    public String[] objectIds;
    public DescribeObjectsInput withObjectIds(String[] objectIds) {
        this.objectIds = objectIds;
        return this;
    }
    @JsonProperty("pipelineId")
    public String pipelineId;
    public DescribeObjectsInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
}