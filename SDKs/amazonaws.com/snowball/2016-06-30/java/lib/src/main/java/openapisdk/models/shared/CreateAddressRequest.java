package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAddressRequest {
    @JsonProperty("Address")
    public Address address;
    public CreateAddressRequest withAddress(Address address) {
        this.address = address;
        return this;
    }
}