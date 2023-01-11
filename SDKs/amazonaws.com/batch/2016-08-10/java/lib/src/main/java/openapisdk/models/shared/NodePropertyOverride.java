package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodePropertyOverride
 * Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
**/
public class NodePropertyOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerOverrides")
    public ContainerOverrides containerOverrides;
    public NodePropertyOverride withContainerOverrides(ContainerOverrides containerOverrides) {
        this.containerOverrides = containerOverrides;
        return this;
    }
    @JsonProperty("targetNodes")
    public String targetNodes;
    public NodePropertyOverride withTargetNodes(String targetNodes) {
        this.targetNodes = targetNodes;
        return this;
    }
}