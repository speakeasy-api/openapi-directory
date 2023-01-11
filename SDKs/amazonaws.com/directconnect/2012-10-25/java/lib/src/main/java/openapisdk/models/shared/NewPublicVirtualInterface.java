package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NewPublicVirtualInterface
 * Information about a public virtual interface.
**/
public class NewPublicVirtualInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressFamily")
    public AddressFamilyEnum addressFamily;
    public NewPublicVirtualInterface withAddressFamily(AddressFamilyEnum addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazonAddress")
    public String amazonAddress;
    public NewPublicVirtualInterface withAmazonAddress(String amazonAddress) {
        this.amazonAddress = amazonAddress;
        return this;
    }
    @JsonProperty("asn")
    public Long asn;
    public NewPublicVirtualInterface withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authKey")
    public String authKey;
    public NewPublicVirtualInterface withAuthKey(String authKey) {
        this.authKey = authKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAddress")
    public String customerAddress;
    public NewPublicVirtualInterface withCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeFilterPrefixes")
    public RouteFilterPrefix[] routeFilterPrefixes;
    public NewPublicVirtualInterface withRouteFilterPrefixes(RouteFilterPrefix[] routeFilterPrefixes) {
        this.routeFilterPrefixes = routeFilterPrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public NewPublicVirtualInterface withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("virtualInterfaceName")
    public String virtualInterfaceName;
    public NewPublicVirtualInterface withVirtualInterfaceName(String virtualInterfaceName) {
        this.virtualInterfaceName = virtualInterfaceName;
        return this;
    }
    @JsonProperty("vlan")
    public Long vlan;
    public NewPublicVirtualInterface withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}