package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GrantAccessRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public GrantAccessRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidForInMinutes")
    public Long validForInMinutes;
    public GrantAccessRequest withValidForInMinutes(Long validForInMinutes) {
        this.validForInMinutes = validForInMinutes;
        return this;
    }
}