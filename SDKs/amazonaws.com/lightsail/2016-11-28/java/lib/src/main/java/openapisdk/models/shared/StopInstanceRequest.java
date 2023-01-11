package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public StopInstanceRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("instanceName")
    public String instanceName;
    public StopInstanceRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}