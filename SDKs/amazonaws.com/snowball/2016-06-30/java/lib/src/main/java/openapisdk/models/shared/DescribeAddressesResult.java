package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAddressesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Addresses")
    public Address[] addresses;
    public DescribeAddressesResult withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAddressesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}