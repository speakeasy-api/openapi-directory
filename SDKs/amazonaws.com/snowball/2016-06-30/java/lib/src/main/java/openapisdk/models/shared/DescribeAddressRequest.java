package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAddressRequest {
    @JsonProperty("AddressId")
    public String addressId;
    public DescribeAddressRequest withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
}