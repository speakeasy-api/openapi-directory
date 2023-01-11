package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cluster
 * Contains all of the attributes of a specific cluster.
**/
public class Cluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ACLName")
    public String aclName;
    public Cluster withAclName(String aclName) {
        this.aclName = aclName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public Cluster withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public Cluster withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityMode")
    public AzStatusEnum availabilityMode;
    public Cluster withAvailabilityMode(AzStatusEnum availabilityMode) {
        this.availabilityMode = availabilityMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterEndpoint")
    public Endpoint clusterEndpoint;
    public Cluster withClusterEndpoint(Endpoint clusterEndpoint) {
        this.clusterEndpoint = clusterEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Cluster withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnginePatchVersion")
    public String enginePatchVersion;
    public Cluster withEnginePatchVersion(String enginePatchVersion) {
        this.enginePatchVersion = enginePatchVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public Cluster withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public Cluster withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintenanceWindow")
    public String maintenanceWindow;
    public Cluster withMaintenanceWindow(String maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Cluster withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeType")
    public String nodeType;
    public Cluster withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfShards")
    public Long numberOfShards;
    public Cluster withNumberOfShards(Long numberOfShards) {
        this.numberOfShards = numberOfShards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public Cluster withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroupStatus")
    public String parameterGroupStatus;
    public Cluster withParameterGroupStatus(String parameterGroupStatus) {
        this.parameterGroupStatus = parameterGroupStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingUpdates")
    public ClusterPendingUpdates pendingUpdates;
    public Cluster withPendingUpdates(ClusterPendingUpdates pendingUpdates) {
        this.pendingUpdates = pendingUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public SecurityGroupMembership[] securityGroups;
    public Cluster withSecurityGroups(SecurityGroupMembership[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Shards")
    public Shard[] shards;
    public Cluster withShards(Shard[] shards) {
        this.shards = shards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotRetentionLimit")
    public Long snapshotRetentionLimit;
    public Cluster withSnapshotRetentionLimit(Long snapshotRetentionLimit) {
        this.snapshotRetentionLimit = snapshotRetentionLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotWindow")
    public String snapshotWindow;
    public Cluster withSnapshotWindow(String snapshotWindow) {
        this.snapshotWindow = snapshotWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public Cluster withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicStatus")
    public String snsTopicStatus;
    public Cluster withSnsTopicStatus(String snsTopicStatus) {
        this.snsTopicStatus = snsTopicStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public Cluster withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetGroupName")
    public String subnetGroupName;
    public Cluster withSubnetGroupName(String subnetGroupName) {
        this.subnetGroupName = subnetGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TLSEnabled")
    public Boolean tlsEnabled;
    public Cluster withTlsEnabled(Boolean tlsEnabled) {
        this.tlsEnabled = tlsEnabled;
        return this;
    }
}