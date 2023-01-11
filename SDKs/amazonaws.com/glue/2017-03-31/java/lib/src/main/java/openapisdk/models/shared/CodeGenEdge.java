package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeGenEdge
 * Represents a directional edge in a directed acyclic graph (DAG).
**/
public class CodeGenEdge {
    @JsonProperty("Source")
    public String source;
    public CodeGenEdge withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonProperty("Target")
    public String target;
    public CodeGenEdge withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetParameter")
    public String targetParameter;
    public CodeGenEdge withTargetParameter(String targetParameter) {
        this.targetParameter = targetParameter;
        return this;
    }
}