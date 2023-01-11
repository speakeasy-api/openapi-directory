package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterInstanceResult
 * Contains the response to a <code>RegisterInstanceResult</code> request.
**/
public class RegisterInstanceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public RegisterInstanceResult withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}