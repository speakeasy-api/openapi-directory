package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpAddressEntity
 * List IP Addresses associated with the current site
**/
public class IpAddressEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associated_with")
    public String associatedWith;
    public IpAddressEntity withAssociatedWith(String associatedWith) {
        this.associatedWith = associatedWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Integer groupId;
    public IpAddressEntity withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public IpAddressEntity withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_addresses")
    public String[] ipAddresses;
    public IpAddressEntity withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
}