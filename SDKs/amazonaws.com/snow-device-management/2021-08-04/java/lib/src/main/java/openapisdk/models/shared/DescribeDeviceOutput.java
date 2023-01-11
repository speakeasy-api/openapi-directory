package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDeviceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedWithJob")
    public String associatedWithJob;
    public DescribeDeviceOutput withAssociatedWithJob(String associatedWithJob) {
        this.associatedWithJob = associatedWithJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCapacities")
    public Capacity[] deviceCapacities;
    public DescribeDeviceOutput withDeviceCapacities(Capacity[] deviceCapacities) {
        this.deviceCapacities = deviceCapacities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceState")
    public UnlockStateEnum deviceState;
    public DescribeDeviceOutput withDeviceState(UnlockStateEnum deviceState) {
        this.deviceState = deviceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public String deviceType;
    public DescribeDeviceOutput withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastReachedOutAt")
    public OffsetDateTime lastReachedOutAt;
    public DescribeDeviceOutput withLastReachedOutAt(OffsetDateTime lastReachedOutAt) {
        this.lastReachedOutAt = lastReachedOutAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public DescribeDeviceOutput withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedDeviceArn")
    public String managedDeviceArn;
    public DescribeDeviceOutput withManagedDeviceArn(String managedDeviceArn) {
        this.managedDeviceArn = managedDeviceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedDeviceId")
    public String managedDeviceId;
    public DescribeDeviceOutput withManagedDeviceId(String managedDeviceId) {
        this.managedDeviceId = managedDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalNetworkInterfaces")
    public PhysicalNetworkInterface[] physicalNetworkInterfaces;
    public DescribeDeviceOutput withPhysicalNetworkInterfaces(PhysicalNetworkInterface[] physicalNetworkInterfaces) {
        this.physicalNetworkInterfaces = physicalNetworkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("software")
    public SoftwareInformation software;
    public DescribeDeviceOutput withSoftware(SoftwareInformation software) {
        this.software = software;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeDeviceOutput withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}