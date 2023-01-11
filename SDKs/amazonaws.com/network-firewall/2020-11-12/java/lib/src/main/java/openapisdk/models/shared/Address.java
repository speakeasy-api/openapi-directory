package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Address
 * A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.
**/
public class Address {
    @JsonProperty("AddressDefinition")
    public String addressDefinition;
    public Address withAddressDefinition(String addressDefinition) {
        this.addressDefinition = addressDefinition;
        return this;
    }
}