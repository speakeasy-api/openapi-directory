package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceProfileResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceProfile")
    public InstanceProfile instanceProfile;
    public GetInstanceProfileResult withInstanceProfile(InstanceProfile instanceProfile) {
        this.instanceProfile = instanceProfile;
        return this;
    }
}