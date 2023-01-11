package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateReplicationInstanceMessage
 * <p/>
**/
public class CreateReplicationInstanceMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedStorage")
    public Long allocatedStorage;
    public CreateReplicationInstanceMessage withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public CreateReplicationInstanceMessage withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public CreateReplicationInstanceMessage withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsNameServers")
    public String dnsNameServers;
    public CreateReplicationInstanceMessage withDnsNameServers(String dnsNameServers) {
        this.dnsNameServers = dnsNameServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public CreateReplicationInstanceMessage withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateReplicationInstanceMessage withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAZ")
    public Boolean multiAZ;
    public CreateReplicationInstanceMessage withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public CreateReplicationInstanceMessage withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PubliclyAccessible")
    public Boolean publiclyAccessible;
    public CreateReplicationInstanceMessage withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @JsonProperty("ReplicationInstanceClass")
    public String replicationInstanceClass;
    public CreateReplicationInstanceMessage withReplicationInstanceClass(String replicationInstanceClass) {
        this.replicationInstanceClass = replicationInstanceClass;
        return this;
    }
    @JsonProperty("ReplicationInstanceIdentifier")
    public String replicationInstanceIdentifier;
    public CreateReplicationInstanceMessage withReplicationInstanceIdentifier(String replicationInstanceIdentifier) {
        this.replicationInstanceIdentifier = replicationInstanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroupIdentifier")
    public String replicationSubnetGroupIdentifier;
    public CreateReplicationInstanceMessage withReplicationSubnetGroupIdentifier(String replicationSubnetGroupIdentifier) {
        this.replicationSubnetGroupIdentifier = replicationSubnetGroupIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdentifier")
    public String resourceIdentifier;
    public CreateReplicationInstanceMessage withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateReplicationInstanceMessage withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroupIds")
    public String[] vpcSecurityGroupIds;
    public CreateReplicationInstanceMessage withVpcSecurityGroupIds(String[] vpcSecurityGroupIds) {
        this.vpcSecurityGroupIds = vpcSecurityGroupIds;
        return this;
    }
}