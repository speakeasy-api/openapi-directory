package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Force")
    public Boolean force;
    public StopInstanceRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public StopInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}