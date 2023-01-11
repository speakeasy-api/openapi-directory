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
 * Interconnect
 * Information about an interconnect.
**/
public class Interconnect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsDevice")
    public String awsDevice;
    public Interconnect withAwsDevice(String awsDevice) {
        this.awsDevice = awsDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsDeviceV2")
    public String awsDeviceV2;
    public Interconnect withAwsDeviceV2(String awsDeviceV2) {
        this.awsDeviceV2 = awsDeviceV2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsLogicalDeviceId")
    public String awsLogicalDeviceId;
    public Interconnect withAwsLogicalDeviceId(String awsLogicalDeviceId) {
        this.awsLogicalDeviceId = awsLogicalDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public String bandwidth;
    public Interconnect withBandwidth(String bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasLogicalRedundancy")
    public HasLogicalRedundancyEnum hasLogicalRedundancy;
    public Interconnect withHasLogicalRedundancy(HasLogicalRedundancyEnum hasLogicalRedundancy) {
        this.hasLogicalRedundancy = hasLogicalRedundancy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectId")
    public String interconnectId;
    public Interconnect withInterconnectId(String interconnectId) {
        this.interconnectId = interconnectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectName")
    public String interconnectName;
    public Interconnect withInterconnectName(String interconnectName) {
        this.interconnectName = interconnectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectState")
    public InterconnectStateEnum interconnectState;
    public Interconnect withInterconnectState(InterconnectStateEnum interconnectState) {
        this.interconnectState = interconnectState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jumboFrameCapable")
    public Boolean jumboFrameCapable;
    public Interconnect withJumboFrameCapable(Boolean jumboFrameCapable) {
        this.jumboFrameCapable = jumboFrameCapable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lagId")
    public String lagId;
    public Interconnect withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("loaIssueTime")
    public OffsetDateTime loaIssueTime;
    public Interconnect withLoaIssueTime(OffsetDateTime loaIssueTime) {
        this.loaIssueTime = loaIssueTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Interconnect withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public Interconnect withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Interconnect withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Interconnect withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}