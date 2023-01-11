package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbCluster
 * <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
**/
public class DbCluster {
    public String activityStreamKinesisStreamName;
    public DbCluster withActivityStreamKinesisStreamName(String activityStreamKinesisStreamName) {
        this.activityStreamKinesisStreamName = activityStreamKinesisStreamName;
        return this;
    }
    public String activityStreamKmsKeyId;
    public DbCluster withActivityStreamKmsKeyId(String activityStreamKmsKeyId) {
        this.activityStreamKmsKeyId = activityStreamKmsKeyId;
        return this;
    }
    public ActivityStreamModeEnum activityStreamMode;
    public DbCluster withActivityStreamMode(ActivityStreamModeEnum activityStreamMode) {
        this.activityStreamMode = activityStreamMode;
        return this;
    }
    public ActivityStreamStatusEnum activityStreamStatus;
    public DbCluster withActivityStreamStatus(ActivityStreamStatusEnum activityStreamStatus) {
        this.activityStreamStatus = activityStreamStatus;
        return this;
    }
    public Long allocatedStorage;
    public DbCluster withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public DbClusterRoles[] associatedRoles;
    public DbCluster withAssociatedRoles(DbClusterRoles[] associatedRoles) {
        this.associatedRoles = associatedRoles;
        return this;
    }
    public OffsetDateTime automaticRestartTime;
    public DbCluster withAutomaticRestartTime(OffsetDateTime automaticRestartTime) {
        this.automaticRestartTime = automaticRestartTime;
        return this;
    }
    public java.util.Map<String, Object>[] availabilityZones;
    public DbCluster withAvailabilityZones(java.util.Map<String, Object>[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public Long backtrackConsumedChangeRecords;
    public DbCluster withBacktrackConsumedChangeRecords(Long backtrackConsumedChangeRecords) {
        this.backtrackConsumedChangeRecords = backtrackConsumedChangeRecords;
        return this;
    }
    public Long backtrackWindow;
    public DbCluster withBacktrackWindow(Long backtrackWindow) {
        this.backtrackWindow = backtrackWindow;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbCluster withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public Long capacity;
    public DbCluster withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    public String characterSetName;
    public DbCluster withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
    public String cloneGroupId;
    public DbCluster withCloneGroupId(String cloneGroupId) {
        this.cloneGroupId = cloneGroupId;
        return this;
    }
    public OffsetDateTime clusterCreateTime;
    public DbCluster withClusterCreateTime(OffsetDateTime clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
        return this;
    }
    public Boolean copyTagsToSnapshot;
    public DbCluster withCopyTagsToSnapshot(Boolean copyTagsToSnapshot) {
        this.copyTagsToSnapshot = copyTagsToSnapshot;
        return this;
    }
    public Boolean crossAccountClone;
    public DbCluster withCrossAccountClone(Boolean crossAccountClone) {
        this.crossAccountClone = crossAccountClone;
        return this;
    }
    public String[] customEndpoints;
    public DbCluster withCustomEndpoints(String[] customEndpoints) {
        this.customEndpoints = customEndpoints;
        return this;
    }
    public String dbClusterArn;
    public DbCluster withDbClusterArn(String dbClusterArn) {
        this.dbClusterArn = dbClusterArn;
        return this;
    }
    public String dbClusterIdentifier;
    public DbCluster withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public DbClusterMemberList[] dbClusterMembers;
    public DbCluster withDbClusterMembers(DbClusterMemberList[] dbClusterMembers) {
        this.dbClusterMembers = dbClusterMembers;
        return this;
    }
    public DbClusterOptionGroupMemberships[] dbClusterOptionGroupMemberships;
    public DbCluster withDbClusterOptionGroupMemberships(DbClusterOptionGroupMemberships[] dbClusterOptionGroupMemberships) {
        this.dbClusterOptionGroupMemberships = dbClusterOptionGroupMemberships;
        return this;
    }
    public String dbClusterParameterGroup;
    public DbCluster withDbClusterParameterGroup(String dbClusterParameterGroup) {
        this.dbClusterParameterGroup = dbClusterParameterGroup;
        return this;
    }
    public String dbSubnetGroup;
    public DbCluster withDbSubnetGroup(String dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    public String databaseName;
    public DbCluster withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    public String dbClusterResourceId;
    public DbCluster withDbClusterResourceId(String dbClusterResourceId) {
        this.dbClusterResourceId = dbClusterResourceId;
        return this;
    }
    public Boolean deletionProtection;
    public DbCluster withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    public DomainMembershipList[] domainMemberships;
    public DbCluster withDomainMemberships(DomainMembershipList[] domainMemberships) {
        this.domainMemberships = domainMemberships;
        return this;
    }
    public OffsetDateTime earliestBacktrackTime;
    public DbCluster withEarliestBacktrackTime(OffsetDateTime earliestBacktrackTime) {
        this.earliestBacktrackTime = earliestBacktrackTime;
        return this;
    }
    public OffsetDateTime earliestRestorableTime;
    public DbCluster withEarliestRestorableTime(OffsetDateTime earliestRestorableTime) {
        this.earliestRestorableTime = earliestRestorableTime;
        return this;
    }
    public String[] enabledCloudwatchLogsExports;
    public DbCluster withEnabledCloudwatchLogsExports(String[] enabledCloudwatchLogsExports) {
        this.enabledCloudwatchLogsExports = enabledCloudwatchLogsExports;
        return this;
    }
    public String endpoint;
    public DbCluster withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engine;
    public DbCluster withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineMode;
    public DbCluster withEngineMode(String engineMode) {
        this.engineMode = engineMode;
        return this;
    }
    public String engineVersion;
    public DbCluster withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean globalWriteForwardingRequested;
    public DbCluster withGlobalWriteForwardingRequested(Boolean globalWriteForwardingRequested) {
        this.globalWriteForwardingRequested = globalWriteForwardingRequested;
        return this;
    }
    public WriteForwardingStatusEnum globalWriteForwardingStatus;
    public DbCluster withGlobalWriteForwardingStatus(WriteForwardingStatusEnum globalWriteForwardingStatus) {
        this.globalWriteForwardingStatus = globalWriteForwardingStatus;
        return this;
    }
    public String hostedZoneId;
    public DbCluster withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
    public Boolean httpEndpointEnabled;
    public DbCluster withHttpEndpointEnabled(Boolean httpEndpointEnabled) {
        this.httpEndpointEnabled = httpEndpointEnabled;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbCluster withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public String kmsKeyId;
    public DbCluster withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public OffsetDateTime latestRestorableTime;
    public DbCluster withLatestRestorableTime(OffsetDateTime latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    public String masterUsername;
    public DbCluster withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Boolean multiAZ;
    public DbCluster withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public ClusterPendingModifiedValues pendingModifiedValues;
    public DbCluster withPendingModifiedValues(ClusterPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public String percentProgress;
    public DbCluster withPercentProgress(String percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public Long port;
    public DbCluster withPort(Long port) {
        this.port = port;
        return this;
    }
    public String preferredBackupWindow;
    public DbCluster withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    public String preferredMaintenanceWindow;
    public DbCluster withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public java.util.Map<String, Object>[] readReplicaIdentifiers;
    public DbCluster withReadReplicaIdentifiers(java.util.Map<String, Object>[] readReplicaIdentifiers) {
        this.readReplicaIdentifiers = readReplicaIdentifiers;
        return this;
    }
    public String readerEndpoint;
    public DbCluster withReaderEndpoint(String readerEndpoint) {
        this.readerEndpoint = readerEndpoint;
        return this;
    }
    public String replicationSourceIdentifier;
    public DbCluster withReplicationSourceIdentifier(String replicationSourceIdentifier) {
        this.replicationSourceIdentifier = replicationSourceIdentifier;
        return this;
    }
    public ScalingConfigurationInfo scalingConfigurationInfo;
    public DbCluster withScalingConfigurationInfo(ScalingConfigurationInfo scalingConfigurationInfo) {
        this.scalingConfigurationInfo = scalingConfigurationInfo;
        return this;
    }
    public String status;
    public DbCluster withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean storageEncrypted;
    public DbCluster withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    public TagList[] tagList;
    public DbCluster withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbCluster withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}