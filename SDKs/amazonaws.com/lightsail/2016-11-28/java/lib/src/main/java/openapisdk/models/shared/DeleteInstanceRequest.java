package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceDeleteAddOns")
    public Boolean forceDeleteAddOns;
    public DeleteInstanceRequest withForceDeleteAddOns(Boolean forceDeleteAddOns) {
        this.forceDeleteAddOns = forceDeleteAddOns;
        return this;
    }
    @JsonProperty("instanceName")
    public String instanceName;
    public DeleteInstanceRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}