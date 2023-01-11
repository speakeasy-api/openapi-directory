package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResendFailedIpnRequest {
    @JsonProperty("id")
    public Integer id;
    public ResendFailedIpnRequest withId(Integer id) {
        this.id = id;
        return this;
    }
}