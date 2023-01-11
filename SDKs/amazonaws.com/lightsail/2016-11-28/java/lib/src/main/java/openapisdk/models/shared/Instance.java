package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Instance
 * Describes an instance (a virtual private server).
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addOns")
    public AddOn[] addOns;
    public Instance withAddOns(AddOn[] addOns) {
        this.addOns = addOns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Instance withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blueprintId")
    public String blueprintId;
    public Instance withBlueprintId(String blueprintId) {
        this.blueprintId = blueprintId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blueprintName")
    public String blueprintName;
    public Instance withBlueprintName(String blueprintName) {
        this.blueprintName = blueprintName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public Instance withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Instance withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hardware")
    public InstanceHardware hardware;
    public Instance withHardware(InstanceHardware hardware) {
        this.hardware = hardware;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public Instance withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Addresses")
    public String[] ipv6Addresses;
    public Instance withIpv6Addresses(String[] ipv6Addresses) {
        this.ipv6Addresses = ipv6Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isStaticIp")
    public Boolean isStaticIp;
    public Instance withIsStaticIp(Boolean isStaticIp) {
        this.isStaticIp = isStaticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public Instance withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networking")
    public InstanceNetworking networking;
    public Instance withNetworking(InstanceNetworking networking) {
        this.networking = networking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIpAddress")
    public String privateIpAddress;
    public Instance withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIpAddress")
    public String publicIpAddress;
    public Instance withPublicIpAddress(String publicIpAddress) {
        this.publicIpAddress = publicIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public Instance withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshKeyName")
    public String sshKeyName;
    public Instance withSshKeyName(String sshKeyName) {
        this.sshKeyName = sshKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceState state;
    public Instance withState(InstanceState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public Instance withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Instance withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Instance withUsername(String username) {
        this.username = username;
        return this;
    }
}