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
 * ReplicationInstance
 * Provides information that defines a replication instance.
**/
public class ReplicationInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedStorage")
    public Long allocatedStorage;
    public ReplicationInstance withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public ReplicationInstance withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public ReplicationInstance withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsNameServers")
    public String dnsNameServers;
    public ReplicationInstance withDnsNameServers(String dnsNameServers) {
        this.dnsNameServers = dnsNameServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public ReplicationInstance withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FreeUntil")
    public OffsetDateTime freeUntil;
    public ReplicationInstance withFreeUntil(OffsetDateTime freeUntil) {
        this.freeUntil = freeUntil;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("InstanceCreateTime")
    public OffsetDateTime instanceCreateTime;
    public ReplicationInstance withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public ReplicationInstance withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAZ")
    public Boolean multiAZ;
    public ReplicationInstance withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingModifiedValues")
    public ReplicationPendingModifiedValues pendingModifiedValues;
    public ReplicationInstance withPendingModifiedValues(ReplicationPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public ReplicationInstance withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PubliclyAccessible")
    public Boolean publiclyAccessible;
    public ReplicationInstance withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public ReplicationInstance withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceClass")
    public String replicationInstanceClass;
    public ReplicationInstance withReplicationInstanceClass(String replicationInstanceClass) {
        this.replicationInstanceClass = replicationInstanceClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceIdentifier")
    public String replicationInstanceIdentifier;
    public ReplicationInstance withReplicationInstanceIdentifier(String replicationInstanceIdentifier) {
        this.replicationInstanceIdentifier = replicationInstanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstancePrivateIpAddress")
    public java.util.Map<String, Object> replicationInstancePrivateIpAddress;
    public ReplicationInstance withReplicationInstancePrivateIpAddress(java.util.Map<String, Object> replicationInstancePrivateIpAddress) {
        this.replicationInstancePrivateIpAddress = replicationInstancePrivateIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstancePrivateIpAddresses")
    public String[] replicationInstancePrivateIpAddresses;
    public ReplicationInstance withReplicationInstancePrivateIpAddresses(String[] replicationInstancePrivateIpAddresses) {
        this.replicationInstancePrivateIpAddresses = replicationInstancePrivateIpAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstancePublicIpAddress")
    public java.util.Map<String, Object> replicationInstancePublicIpAddress;
    public ReplicationInstance withReplicationInstancePublicIpAddress(java.util.Map<String, Object> replicationInstancePublicIpAddress) {
        this.replicationInstancePublicIpAddress = replicationInstancePublicIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstancePublicIpAddresses")
    public String[] replicationInstancePublicIpAddresses;
    public ReplicationInstance withReplicationInstancePublicIpAddresses(String[] replicationInstancePublicIpAddresses) {
        this.replicationInstancePublicIpAddresses = replicationInstancePublicIpAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceStatus")
    public String replicationInstanceStatus;
    public ReplicationInstance withReplicationInstanceStatus(String replicationInstanceStatus) {
        this.replicationInstanceStatus = replicationInstanceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroup")
    public ReplicationSubnetGroup replicationSubnetGroup;
    public ReplicationInstance withReplicationSubnetGroup(ReplicationSubnetGroup replicationSubnetGroup) {
        this.replicationSubnetGroup = replicationSubnetGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryAvailabilityZone")
    public String secondaryAvailabilityZone;
    public ReplicationInstance withSecondaryAvailabilityZone(String secondaryAvailabilityZone) {
        this.secondaryAvailabilityZone = secondaryAvailabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroups")
    public VpcSecurityGroupMembership[] vpcSecurityGroups;
    public ReplicationInstance withVpcSecurityGroups(VpcSecurityGroupMembership[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}