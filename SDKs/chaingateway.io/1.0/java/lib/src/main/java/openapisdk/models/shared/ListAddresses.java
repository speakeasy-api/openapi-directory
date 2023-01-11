package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAddresses {
    @JsonProperty("addresses")
    public Address[] addresses;
    public ListAddresses withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public ListAddresses withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}