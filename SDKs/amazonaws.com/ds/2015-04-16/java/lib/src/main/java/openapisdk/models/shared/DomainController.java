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
 * DomainController
 * Contains information about the domain controllers for a specified directory.
**/
public class DomainController {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public DomainController withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DomainController withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsIpAddr")
    public String dnsIpAddr;
    public DomainController withDnsIpAddr(String dnsIpAddr) {
        this.dnsIpAddr = dnsIpAddr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainControllerId")
    public String domainControllerId;
    public DomainController withDomainControllerId(String domainControllerId) {
        this.domainControllerId = domainControllerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LaunchTime")
    public OffsetDateTime launchTime;
    public DomainController withLaunchTime(OffsetDateTime launchTime) {
        this.launchTime = launchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public DomainControllerStatusEnum status;
    public DomainController withStatus(DomainControllerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StatusLastUpdatedDateTime")
    public OffsetDateTime statusLastUpdatedDateTime;
    public DomainController withStatusLastUpdatedDateTime(OffsetDateTime statusLastUpdatedDateTime) {
        this.statusLastUpdatedDateTime = statusLastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public DomainController withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public DomainController withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public DomainController withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}