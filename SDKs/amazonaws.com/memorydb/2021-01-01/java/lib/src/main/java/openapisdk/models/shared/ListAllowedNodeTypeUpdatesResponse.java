package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllowedNodeTypeUpdatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScaleDownNodeTypes")
    public String[] scaleDownNodeTypes;
    public ListAllowedNodeTypeUpdatesResponse withScaleDownNodeTypes(String[] scaleDownNodeTypes) {
        this.scaleDownNodeTypes = scaleDownNodeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScaleUpNodeTypes")
    public String[] scaleUpNodeTypes;
    public ListAllowedNodeTypeUpdatesResponse withScaleUpNodeTypes(String[] scaleUpNodeTypes) {
        this.scaleUpNodeTypes = scaleUpNodeTypes;
        return this;
    }
}