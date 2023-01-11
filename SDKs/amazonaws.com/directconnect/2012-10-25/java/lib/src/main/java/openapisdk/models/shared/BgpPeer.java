package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BgpPeer
 * Information about a BGP peer.
**/
public class BgpPeer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressFamily")
    public AddressFamilyEnum addressFamily;
    public BgpPeer withAddressFamily(AddressFamilyEnum addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonAddress")
    public String amazonAddress;
    public BgpPeer withAmazonAddress(String amazonAddress) {
        this.amazonAddress = amazonAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asn")
    public Long asn;
    public BgpPeer withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;
    public BgpPeer withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsDeviceV2")
    public String awsDeviceV2;
    public BgpPeer withAwsDeviceV2(String awsDeviceV2) {
        this.awsDeviceV2 = awsDeviceV2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsLogicalDeviceId")
    public String awsLogicalDeviceId;
    public BgpPeer withAwsLogicalDeviceId(String awsLogicalDeviceId) {
        this.awsLogicalDeviceId = awsLogicalDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpPeerId")
    public String bgpPeerId;
    public BgpPeer withBgpPeerId(String bgpPeerId) {
        this.bgpPeerId = bgpPeerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpPeerState")
    public BgpPeerStateEnum bgpPeerState;
    public BgpPeer withBgpPeerState(BgpPeerStateEnum bgpPeerState) {
        this.bgpPeerState = bgpPeerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpStatus")
    public BgpStatusEnum bgpStatus;
    public BgpPeer withBgpStatus(BgpStatusEnum bgpStatus) {
        this.bgpStatus = bgpStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAddress")
    public String customerAddress;
    public BgpPeer withCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
        return this;
    }
}