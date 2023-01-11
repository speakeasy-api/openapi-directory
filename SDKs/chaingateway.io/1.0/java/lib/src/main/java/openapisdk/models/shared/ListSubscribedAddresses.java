package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListSubscribedAddresses {
    @JsonProperty("ipns")
    public Ipn[] ipns;
    public ListSubscribedAddresses withIpns(Ipn[] ipns) {
        this.ipns = ipns;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public ListSubscribedAddresses withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}