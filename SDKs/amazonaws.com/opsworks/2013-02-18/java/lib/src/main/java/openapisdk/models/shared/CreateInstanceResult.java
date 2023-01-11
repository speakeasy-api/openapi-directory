package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateInstanceResult
 * Contains the response to a <code>CreateInstance</code> request.
**/
public class CreateInstanceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public CreateInstanceResult withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}