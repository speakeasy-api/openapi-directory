package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInstancesFromSnapshotRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addOns")
    public AddOnRequest[] addOns;
    public CreateInstancesFromSnapshotRequest withAddOns(AddOnRequest[] addOns) {
        this.addOns = addOns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachedDiskMapping")
    public java.util.Map<String, DiskMap[]> attachedDiskMapping;
    public CreateInstancesFromSnapshotRequest withAttachedDiskMapping(java.util.Map<String, DiskMap[]> attachedDiskMapping) {
        this.attachedDiskMapping = attachedDiskMapping;
        return this;
    }
    @JsonProperty("availabilityZone")
    public String availabilityZone;
    public CreateInstancesFromSnapshotRequest withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonProperty("bundleId")
    public String bundleId;
    public CreateInstancesFromSnapshotRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public CreateInstancesFromSnapshotRequest withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceSnapshotName")
    public String instanceSnapshotName;
    public CreateInstancesFromSnapshotRequest withInstanceSnapshotName(String instanceSnapshotName) {
        this.instanceSnapshotName = instanceSnapshotName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public CreateInstancesFromSnapshotRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPairName")
    public String keyPairName;
    public CreateInstancesFromSnapshotRequest withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreDate")
    public String restoreDate;
    public CreateInstancesFromSnapshotRequest withRestoreDate(String restoreDate) {
        this.restoreDate = restoreDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceInstanceName")
    public String sourceInstanceName;
    public CreateInstancesFromSnapshotRequest withSourceInstanceName(String sourceInstanceName) {
        this.sourceInstanceName = sourceInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateInstancesFromSnapshotRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useLatestRestorableAutoSnapshot")
    public Boolean useLatestRestorableAutoSnapshot;
    public CreateInstancesFromSnapshotRequest withUseLatestRestorableAutoSnapshot(Boolean useLatestRestorableAutoSnapshot) {
        this.useLatestRestorableAutoSnapshot = useLatestRestorableAutoSnapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public String userData;
    public CreateInstancesFromSnapshotRequest withUserData(String userData) {
        this.userData = userData;
        return this;
    }
}