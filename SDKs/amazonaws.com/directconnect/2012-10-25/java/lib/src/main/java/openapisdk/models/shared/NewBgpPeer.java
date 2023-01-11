package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NewBgpPeer
 * Information about a new BGP peer.
**/
public class NewBgpPeer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressFamily")
    public AddressFamilyEnum addressFamily;
    public NewBgpPeer withAddressFamily(AddressFamilyEnum addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonAddress")
    public String amazonAddress;
    public NewBgpPeer withAmazonAddress(String amazonAddress) {
        this.amazonAddress = amazonAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asn")
    public Long asn;
    public NewBgpPeer withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;
    public NewBgpPeer withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAddress")
    public String customerAddress;
    public NewBgpPeer withCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
        return this;
    }
}