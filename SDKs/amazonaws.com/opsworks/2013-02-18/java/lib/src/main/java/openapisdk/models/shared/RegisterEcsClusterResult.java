package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterEcsClusterResult
 * Contains the response to a <code>RegisterEcsCluster</code> request.
**/
public class RegisterEcsClusterResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcsClusterArn")
    public String ecsClusterArn;
    public RegisterEcsClusterResult withEcsClusterArn(String ecsClusterArn) {
        this.ecsClusterArn = ecsClusterArn;
        return this;
    }
}