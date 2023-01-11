package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInstancesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addOns")
    public AddOnRequest[] addOns;
    public CreateInstancesRequest withAddOns(AddOnRequest[] addOns) {
        this.addOns = addOns;
        return this;
    }
    @JsonProperty("availabilityZone")
    public String availabilityZone;
    public CreateInstancesRequest withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonProperty("blueprintId")
    public String blueprintId;
    public CreateInstancesRequest withBlueprintId(String blueprintId) {
        this.blueprintId = blueprintId;
        return this;
    }
    @JsonProperty("bundleId")
    public String bundleId;
    public CreateInstancesRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customImageName")
    public java.util.Map<String, Object> customImageName;
    public CreateInstancesRequest withCustomImageName(java.util.Map<String, Object> customImageName) {
        this.customImageName = customImageName;
        return this;
    }
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public CreateInstancesRequest withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public CreateInstancesRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPairName")
    public String keyPairName;
    public CreateInstancesRequest withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateInstancesRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public String userData;
    public CreateInstancesRequest withUserData(String userData) {
        this.userData = userData;
        return this;
    }
}