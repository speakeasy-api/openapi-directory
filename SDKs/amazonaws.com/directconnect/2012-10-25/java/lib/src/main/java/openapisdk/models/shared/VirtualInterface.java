package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualInterface
 * Information about a virtual interface.
**/
public class VirtualInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressFamily")
    public AddressFamilyEnum addressFamily;
    public VirtualInterface withAddressFamily(AddressFamilyEnum addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonAddress")
    public String amazonAddress;
    public VirtualInterface withAmazonAddress(String amazonAddress) {
        this.amazonAddress = amazonAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonSideAsn")
    public Long amazonSideAsn;
    public VirtualInterface withAmazonSideAsn(Long amazonSideAsn) {
        this.amazonSideAsn = amazonSideAsn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asn")
    public Long asn;
    public VirtualInterface withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;
    public VirtualInterface withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsDeviceV2")
    public String awsDeviceV2;
    public VirtualInterface withAwsDeviceV2(String awsDeviceV2) {
        this.awsDeviceV2 = awsDeviceV2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsLogicalDeviceId")
    public String awsLogicalDeviceId;
    public VirtualInterface withAwsLogicalDeviceId(String awsLogicalDeviceId) {
        this.awsLogicalDeviceId = awsLogicalDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpPeers")
    public BgpPeer[] bgpPeers;
    public VirtualInterface withBgpPeers(BgpPeer[] bgpPeers) {
        this.bgpPeers = bgpPeers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public String connectionId;
    public VirtualInterface withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAddress")
    public String customerAddress;
    public VirtualInterface withCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerRouterConfig")
    public String customerRouterConfig;
    public VirtualInterface withCustomerRouterConfig(String customerRouterConfig) {
        this.customerRouterConfig = customerRouterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public VirtualInterface withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jumboFrameCapable")
    public Boolean jumboFrameCapable;
    public VirtualInterface withJumboFrameCapable(Boolean jumboFrameCapable) {
        this.jumboFrameCapable = jumboFrameCapable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public VirtualInterface withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public VirtualInterface withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerAccount")
    public String ownerAccount;
    public VirtualInterface withOwnerAccount(String ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public VirtualInterface withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeFilterPrefixes")
    public RouteFilterPrefix[] routeFilterPrefixes;
    public VirtualInterface withRouteFilterPrefixes(RouteFilterPrefix[] routeFilterPrefixes) {
        this.routeFilterPrefixes = routeFilterPrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public VirtualInterface withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualGatewayId")
    public String virtualGatewayId;
    public VirtualInterface withVirtualGatewayId(String virtualGatewayId) {
        this.virtualGatewayId = virtualGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public VirtualInterface withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceName")
    public String virtualInterfaceName;
    public VirtualInterface withVirtualInterfaceName(String virtualInterfaceName) {
        this.virtualInterfaceName = virtualInterfaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceState")
    public VirtualInterfaceStateEnum virtualInterfaceState;
    public VirtualInterface withVirtualInterfaceState(VirtualInterfaceStateEnum virtualInterfaceState) {
        this.virtualInterfaceState = virtualInterfaceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceType")
    public String virtualInterfaceType;
    public VirtualInterface withVirtualInterfaceType(String virtualInterfaceType) {
        this.virtualInterfaceType = virtualInterfaceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public VirtualInterface withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}