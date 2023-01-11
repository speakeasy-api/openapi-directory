package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NewPublicVirtualInterfaceAllocation
 * Information about a public virtual interface to be provisioned on a connection.
**/
public class NewPublicVirtualInterfaceAllocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressFamily")
    public AddressFamilyEnum addressFamily;
    public NewPublicVirtualInterfaceAllocation withAddressFamily(AddressFamilyEnum addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonAddress")
    public String amazonAddress;
    public NewPublicVirtualInterfaceAllocation withAmazonAddress(String amazonAddress) {
        this.amazonAddress = amazonAddress;
        return this;
    }
    @JsonProperty("asn")
    public Long asn;
    public NewPublicVirtualInterfaceAllocation withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;
    public NewPublicVirtualInterfaceAllocation withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAddress")
    public String customerAddress;
    public NewPublicVirtualInterfaceAllocation withCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeFilterPrefixes")
    public RouteFilterPrefix[] routeFilterPrefixes;
    public NewPublicVirtualInterfaceAllocation withRouteFilterPrefixes(RouteFilterPrefix[] routeFilterPrefixes) {
        this.routeFilterPrefixes = routeFilterPrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public NewPublicVirtualInterfaceAllocation withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("virtualInterfaceName")
    public String virtualInterfaceName;
    public NewPublicVirtualInterfaceAllocation withVirtualInterfaceName(String virtualInterfaceName) {
        this.virtualInterfaceName = virtualInterfaceName;
        return this;
    }
    @JsonProperty("vlan")
    public Long vlan;
    public NewPublicVirtualInterfaceAllocation withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}