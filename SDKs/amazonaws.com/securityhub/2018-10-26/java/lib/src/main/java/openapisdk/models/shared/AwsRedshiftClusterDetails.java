package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterDetails
 * Details about an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowVersionUpgrade")
    public Boolean allowVersionUpgrade;
    public AwsRedshiftClusterDetails withAllowVersionUpgrade(Boolean allowVersionUpgrade) {
        this.allowVersionUpgrade = allowVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutomatedSnapshotRetentionPeriod")
    public Long automatedSnapshotRetentionPeriod;
    public AwsRedshiftClusterDetails withAutomatedSnapshotRetentionPeriod(Long automatedSnapshotRetentionPeriod) {
        this.automatedSnapshotRetentionPeriod = automatedSnapshotRetentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public AwsRedshiftClusterDetails withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterAvailabilityStatus")
    public String clusterAvailabilityStatus;
    public AwsRedshiftClusterDetails withClusterAvailabilityStatus(String clusterAvailabilityStatus) {
        this.clusterAvailabilityStatus = clusterAvailabilityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterCreateTime")
    public String clusterCreateTime;
    public AwsRedshiftClusterDetails withClusterCreateTime(String clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public AwsRedshiftClusterDetails withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterNodes")
    public AwsRedshiftClusterClusterNode[] clusterNodes;
    public AwsRedshiftClusterDetails withClusterNodes(AwsRedshiftClusterClusterNode[] clusterNodes) {
        this.clusterNodes = clusterNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterParameterGroups")
    public AwsRedshiftClusterClusterParameterGroup[] clusterParameterGroups;
    public AwsRedshiftClusterDetails withClusterParameterGroups(AwsRedshiftClusterClusterParameterGroup[] clusterParameterGroups) {
        this.clusterParameterGroups = clusterParameterGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterPublicKey")
    public String clusterPublicKey;
    public AwsRedshiftClusterDetails withClusterPublicKey(String clusterPublicKey) {
        this.clusterPublicKey = clusterPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterRevisionNumber")
    public String clusterRevisionNumber;
    public AwsRedshiftClusterDetails withClusterRevisionNumber(String clusterRevisionNumber) {
        this.clusterRevisionNumber = clusterRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterSecurityGroups")
    public AwsRedshiftClusterClusterSecurityGroup[] clusterSecurityGroups;
    public AwsRedshiftClusterDetails withClusterSecurityGroups(AwsRedshiftClusterClusterSecurityGroup[] clusterSecurityGroups) {
        this.clusterSecurityGroups = clusterSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterSnapshotCopyStatus")
    public AwsRedshiftClusterClusterSnapshotCopyStatus clusterSnapshotCopyStatus;
    public AwsRedshiftClusterDetails withClusterSnapshotCopyStatus(AwsRedshiftClusterClusterSnapshotCopyStatus clusterSnapshotCopyStatus) {
        this.clusterSnapshotCopyStatus = clusterSnapshotCopyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterStatus")
    public String clusterStatus;
    public AwsRedshiftClusterDetails withClusterStatus(String clusterStatus) {
        this.clusterStatus = clusterStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterSubnetGroupName")
    public String clusterSubnetGroupName;
    public AwsRedshiftClusterDetails withClusterSubnetGroupName(String clusterSubnetGroupName) {
        this.clusterSubnetGroupName = clusterSubnetGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterVersion")
    public String clusterVersion;
    public AwsRedshiftClusterDetails withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DBName")
    public String dbName;
    public AwsRedshiftClusterDetails withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeferredMaintenanceWindows")
    public AwsRedshiftClusterDeferredMaintenanceWindow[] deferredMaintenanceWindows;
    public AwsRedshiftClusterDetails withDeferredMaintenanceWindows(AwsRedshiftClusterDeferredMaintenanceWindow[] deferredMaintenanceWindows) {
        this.deferredMaintenanceWindows = deferredMaintenanceWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticIpStatus")
    public AwsRedshiftClusterElasticIpStatus elasticIpStatus;
    public AwsRedshiftClusterDetails withElasticIpStatus(AwsRedshiftClusterElasticIpStatus elasticIpStatus) {
        this.elasticIpStatus = elasticIpStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticResizeNumberOfNodeOptions")
    public String elasticResizeNumberOfNodeOptions;
    public AwsRedshiftClusterDetails withElasticResizeNumberOfNodeOptions(String elasticResizeNumberOfNodeOptions) {
        this.elasticResizeNumberOfNodeOptions = elasticResizeNumberOfNodeOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public AwsRedshiftClusterDetails withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public AwsRedshiftClusterEndpoint endpoint;
    public AwsRedshiftClusterDetails withEndpoint(AwsRedshiftClusterEndpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnhancedVpcRouting")
    public Boolean enhancedVpcRouting;
    public AwsRedshiftClusterDetails withEnhancedVpcRouting(Boolean enhancedVpcRouting) {
        this.enhancedVpcRouting = enhancedVpcRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedNextSnapshotScheduleTime")
    public String expectedNextSnapshotScheduleTime;
    public AwsRedshiftClusterDetails withExpectedNextSnapshotScheduleTime(String expectedNextSnapshotScheduleTime) {
        this.expectedNextSnapshotScheduleTime = expectedNextSnapshotScheduleTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedNextSnapshotScheduleTimeStatus")
    public String expectedNextSnapshotScheduleTimeStatus;
    public AwsRedshiftClusterDetails withExpectedNextSnapshotScheduleTimeStatus(String expectedNextSnapshotScheduleTimeStatus) {
        this.expectedNextSnapshotScheduleTimeStatus = expectedNextSnapshotScheduleTimeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmStatus")
    public AwsRedshiftClusterHsmStatus hsmStatus;
    public AwsRedshiftClusterDetails withHsmStatus(AwsRedshiftClusterHsmStatus hsmStatus) {
        this.hsmStatus = hsmStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoles")
    public AwsRedshiftClusterIamRole[] iamRoles;
    public AwsRedshiftClusterDetails withIamRoles(AwsRedshiftClusterIamRole[] iamRoles) {
        this.iamRoles = iamRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public AwsRedshiftClusterDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintenanceTrackName")
    public String maintenanceTrackName;
    public AwsRedshiftClusterDetails withMaintenanceTrackName(String maintenanceTrackName) {
        this.maintenanceTrackName = maintenanceTrackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManualSnapshotRetentionPeriod")
    public Long manualSnapshotRetentionPeriod;
    public AwsRedshiftClusterDetails withManualSnapshotRetentionPeriod(Long manualSnapshotRetentionPeriod) {
        this.manualSnapshotRetentionPeriod = manualSnapshotRetentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MasterUsername")
    public String masterUsername;
    public AwsRedshiftClusterDetails withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMaintenanceWindowStartTime")
    public String nextMaintenanceWindowStartTime;
    public AwsRedshiftClusterDetails withNextMaintenanceWindowStartTime(String nextMaintenanceWindowStartTime) {
        this.nextMaintenanceWindowStartTime = nextMaintenanceWindowStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeType")
    public String nodeType;
    public AwsRedshiftClusterDetails withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfNodes")
    public Long numberOfNodes;
    public AwsRedshiftClusterDetails withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingActions")
    public String[] pendingActions;
    public AwsRedshiftClusterDetails withPendingActions(String[] pendingActions) {
        this.pendingActions = pendingActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingModifiedValues")
    public AwsRedshiftClusterPendingModifiedValues pendingModifiedValues;
    public AwsRedshiftClusterDetails withPendingModifiedValues(AwsRedshiftClusterPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public AwsRedshiftClusterDetails withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PubliclyAccessible")
    public Boolean publiclyAccessible;
    public AwsRedshiftClusterDetails withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResizeInfo")
    public AwsRedshiftClusterResizeInfo resizeInfo;
    public AwsRedshiftClusterDetails withResizeInfo(AwsRedshiftClusterResizeInfo resizeInfo) {
        this.resizeInfo = resizeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RestoreStatus")
    public AwsRedshiftClusterRestoreStatus restoreStatus;
    public AwsRedshiftClusterDetails withRestoreStatus(AwsRedshiftClusterRestoreStatus restoreStatus) {
        this.restoreStatus = restoreStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotScheduleIdentifier")
    public String snapshotScheduleIdentifier;
    public AwsRedshiftClusterDetails withSnapshotScheduleIdentifier(String snapshotScheduleIdentifier) {
        this.snapshotScheduleIdentifier = snapshotScheduleIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotScheduleState")
    public String snapshotScheduleState;
    public AwsRedshiftClusterDetails withSnapshotScheduleState(String snapshotScheduleState) {
        this.snapshotScheduleState = snapshotScheduleState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public AwsRedshiftClusterDetails withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroups")
    public AwsRedshiftClusterVpcSecurityGroup[] vpcSecurityGroups;
    public AwsRedshiftClusterDetails withVpcSecurityGroups(AwsRedshiftClusterVpcSecurityGroup[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}