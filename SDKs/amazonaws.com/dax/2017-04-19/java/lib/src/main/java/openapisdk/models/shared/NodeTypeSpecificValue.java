package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeTypeSpecificValue
 * Represents a parameter value that is applicable to a particular node type.
**/
public class NodeTypeSpecificValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeType")
    public String nodeType;
    public NodeTypeSpecificValue withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public NodeTypeSpecificValue withValue(String value) {
        this.value = value;
        return this;
    }
}