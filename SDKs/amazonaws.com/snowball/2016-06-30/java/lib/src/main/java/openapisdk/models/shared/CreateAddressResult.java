package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAddressResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressId")
    public String addressId;
    public CreateAddressResult withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
}