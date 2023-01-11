package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobRequestBodyNodeOverrides
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
**/
public class SubmitJobRequestBodyNodeOverrides {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodePropertyOverrides")
    public openapisdk.models.shared.NodePropertyOverride[] nodePropertyOverrides;
    public SubmitJobRequestBodyNodeOverrides withNodePropertyOverrides(openapisdk.models.shared.NodePropertyOverride[] nodePropertyOverrides) {
        this.nodePropertyOverrides = nodePropertyOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numNodes")
    public Long numNodes;
    public SubmitJobRequestBodyNodeOverrides withNumNodes(Long numNodes) {
        this.numNodes = numNodes;
        return this;
    }
}