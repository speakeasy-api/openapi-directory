package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResendFailedIpn {
    @JsonProperty("id")
    public Integer id;
    public ResendFailedIpn withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public ResendFailedIpn withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}