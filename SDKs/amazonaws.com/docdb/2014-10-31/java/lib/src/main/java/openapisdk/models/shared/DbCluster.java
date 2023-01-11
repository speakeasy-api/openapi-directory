package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbCluster
 * Detailed information about a cluster. 
**/
public class DbCluster {
    public DbClusterRoles[] associatedRoles;
    public DbCluster withAssociatedRoles(DbClusterRoles[] associatedRoles) {
        this.associatedRoles = associatedRoles;
        return this;
    }
    public java.util.Map<String, Object>[] availabilityZones;
    public DbCluster withAvailabilityZones(java.util.Map<String, Object>[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbCluster withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public OffsetDateTime clusterCreateTime;
    public DbCluster withClusterCreateTime(OffsetDateTime clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
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
    public String engineVersion;
    public DbCluster withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String hostedZoneId;
    public DbCluster withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
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
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbCluster withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}