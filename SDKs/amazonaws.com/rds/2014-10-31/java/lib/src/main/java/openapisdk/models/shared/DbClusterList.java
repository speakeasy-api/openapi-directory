package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbClusterList
 * <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
**/
public class DbClusterList {
    public String activityStreamKinesisStreamName;
    public DbClusterList withActivityStreamKinesisStreamName(String activityStreamKinesisStreamName) {
        this.activityStreamKinesisStreamName = activityStreamKinesisStreamName;
        return this;
    }
    public String activityStreamKmsKeyId;
    public DbClusterList withActivityStreamKmsKeyId(String activityStreamKmsKeyId) {
        this.activityStreamKmsKeyId = activityStreamKmsKeyId;
        return this;
    }
    public ActivityStreamModeEnum activityStreamMode;
    public DbClusterList withActivityStreamMode(ActivityStreamModeEnum activityStreamMode) {
        this.activityStreamMode = activityStreamMode;
        return this;
    }
    public ActivityStreamStatusEnum activityStreamStatus;
    public DbClusterList withActivityStreamStatus(ActivityStreamStatusEnum activityStreamStatus) {
        this.activityStreamStatus = activityStreamStatus;
        return this;
    }
    public Long allocatedStorage;
    public DbClusterList withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public DbClusterRoles[] associatedRoles;
    public DbClusterList withAssociatedRoles(DbClusterRoles[] associatedRoles) {
        this.associatedRoles = associatedRoles;
        return this;
    }
    public OffsetDateTime automaticRestartTime;
    public DbClusterList withAutomaticRestartTime(OffsetDateTime automaticRestartTime) {
        this.automaticRestartTime = automaticRestartTime;
        return this;
    }
    public java.util.Map<String, Object>[] availabilityZones;
    public DbClusterList withAvailabilityZones(java.util.Map<String, Object>[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public Long backtrackConsumedChangeRecords;
    public DbClusterList withBacktrackConsumedChangeRecords(Long backtrackConsumedChangeRecords) {
        this.backtrackConsumedChangeRecords = backtrackConsumedChangeRecords;
        return this;
    }
    public Long backtrackWindow;
    public DbClusterList withBacktrackWindow(Long backtrackWindow) {
        this.backtrackWindow = backtrackWindow;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbClusterList withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public Long capacity;
    public DbClusterList withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    public String characterSetName;
    public DbClusterList withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
    public String cloneGroupId;
    public DbClusterList withCloneGroupId(String cloneGroupId) {
        this.cloneGroupId = cloneGroupId;
        return this;
    }
    public OffsetDateTime clusterCreateTime;
    public DbClusterList withClusterCreateTime(OffsetDateTime clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
        return this;
    }
    public Boolean copyTagsToSnapshot;
    public DbClusterList withCopyTagsToSnapshot(Boolean copyTagsToSnapshot) {
        this.copyTagsToSnapshot = copyTagsToSnapshot;
        return this;
    }
    public Boolean crossAccountClone;
    public DbClusterList withCrossAccountClone(Boolean crossAccountClone) {
        this.crossAccountClone = crossAccountClone;
        return this;
    }
    public String[] customEndpoints;
    public DbClusterList withCustomEndpoints(String[] customEndpoints) {
        this.customEndpoints = customEndpoints;
        return this;
    }
    public String dbClusterArn;
    public DbClusterList withDbClusterArn(String dbClusterArn) {
        this.dbClusterArn = dbClusterArn;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterList withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public DbClusterMemberList[] dbClusterMembers;
    public DbClusterList withDbClusterMembers(DbClusterMemberList[] dbClusterMembers) {
        this.dbClusterMembers = dbClusterMembers;
        return this;
    }
    public DbClusterOptionGroupMemberships[] dbClusterOptionGroupMemberships;
    public DbClusterList withDbClusterOptionGroupMemberships(DbClusterOptionGroupMemberships[] dbClusterOptionGroupMemberships) {
        this.dbClusterOptionGroupMemberships = dbClusterOptionGroupMemberships;
        return this;
    }
    public String dbClusterParameterGroup;
    public DbClusterList withDbClusterParameterGroup(String dbClusterParameterGroup) {
        this.dbClusterParameterGroup = dbClusterParameterGroup;
        return this;
    }
    public String dbSubnetGroup;
    public DbClusterList withDbSubnetGroup(String dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    public String databaseName;
    public DbClusterList withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    public String dbClusterResourceId;
    public DbClusterList withDbClusterResourceId(String dbClusterResourceId) {
        this.dbClusterResourceId = dbClusterResourceId;
        return this;
    }
    public Boolean deletionProtection;
    public DbClusterList withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    public DomainMembershipList[] domainMemberships;
    public DbClusterList withDomainMemberships(DomainMembershipList[] domainMemberships) {
        this.domainMemberships = domainMemberships;
        return this;
    }
    public OffsetDateTime earliestBacktrackTime;
    public DbClusterList withEarliestBacktrackTime(OffsetDateTime earliestBacktrackTime) {
        this.earliestBacktrackTime = earliestBacktrackTime;
        return this;
    }
    public OffsetDateTime earliestRestorableTime;
    public DbClusterList withEarliestRestorableTime(OffsetDateTime earliestRestorableTime) {
        this.earliestRestorableTime = earliestRestorableTime;
        return this;
    }
    public String[] enabledCloudwatchLogsExports;
    public DbClusterList withEnabledCloudwatchLogsExports(String[] enabledCloudwatchLogsExports) {
        this.enabledCloudwatchLogsExports = enabledCloudwatchLogsExports;
        return this;
    }
    public String endpoint;
    public DbClusterList withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engine;
    public DbClusterList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineMode;
    public DbClusterList withEngineMode(String engineMode) {
        this.engineMode = engineMode;
        return this;
    }
    public String engineVersion;
    public DbClusterList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean globalWriteForwardingRequested;
    public DbClusterList withGlobalWriteForwardingRequested(Boolean globalWriteForwardingRequested) {
        this.globalWriteForwardingRequested = globalWriteForwardingRequested;
        return this;
    }
    public WriteForwardingStatusEnum globalWriteForwardingStatus;
    public DbClusterList withGlobalWriteForwardingStatus(WriteForwardingStatusEnum globalWriteForwardingStatus) {
        this.globalWriteForwardingStatus = globalWriteForwardingStatus;
        return this;
    }
    public String hostedZoneId;
    public DbClusterList withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
    public Boolean httpEndpointEnabled;
    public DbClusterList withHttpEndpointEnabled(Boolean httpEndpointEnabled) {
        this.httpEndpointEnabled = httpEndpointEnabled;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public DbClusterList withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public String kmsKeyId;
    public DbClusterList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public OffsetDateTime latestRestorableTime;
    public DbClusterList withLatestRestorableTime(OffsetDateTime latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    public String masterUsername;
    public DbClusterList withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Boolean multiAZ;
    public DbClusterList withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public ClusterPendingModifiedValues pendingModifiedValues;
    public DbClusterList withPendingModifiedValues(ClusterPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public String percentProgress;
    public DbClusterList withPercentProgress(String percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public Long port;
    public DbClusterList withPort(Long port) {
        this.port = port;
        return this;
    }
    public String preferredBackupWindow;
    public DbClusterList withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    public String preferredMaintenanceWindow;
    public DbClusterList withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public java.util.Map<String, Object>[] readReplicaIdentifiers;
    public DbClusterList withReadReplicaIdentifiers(java.util.Map<String, Object>[] readReplicaIdentifiers) {
        this.readReplicaIdentifiers = readReplicaIdentifiers;
        return this;
    }
    public String readerEndpoint;
    public DbClusterList withReaderEndpoint(String readerEndpoint) {
        this.readerEndpoint = readerEndpoint;
        return this;
    }
    public String replicationSourceIdentifier;
    public DbClusterList withReplicationSourceIdentifier(String replicationSourceIdentifier) {
        this.replicationSourceIdentifier = replicationSourceIdentifier;
        return this;
    }
    public ScalingConfigurationInfo scalingConfigurationInfo;
    public DbClusterList withScalingConfigurationInfo(ScalingConfigurationInfo scalingConfigurationInfo) {
        this.scalingConfigurationInfo = scalingConfigurationInfo;
        return this;
    }
    public String status;
    public DbClusterList withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean storageEncrypted;
    public DbClusterList withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
    public TagList[] tagList;
    public DbClusterList withTagList(TagList[] tagList) {
        this.tagList = tagList;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbClusterList withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}