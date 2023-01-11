package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbClusterList
 * Detailed information about a cluster. 
**/
public class DbClusterList {
    public DbClusterRoles[] associatedRoles;
    public DbClusterList withAssociatedRoles(DbClusterRoles[] associatedRoles) {
        this.associatedRoles = associatedRoles;
        return this;
    }
    public java.util.Map<String, Object>[] availabilityZones;
    public DbClusterList withAvailabilityZones(java.util.Map<String, Object>[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbClusterList withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public OffsetDateTime clusterCreateTime;
    public DbClusterList withClusterCreateTime(OffsetDateTime clusterCreateTime) {
        this.clusterCreateTime = clusterCreateTime;
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
    public String engineVersion;
    public DbClusterList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String hostedZoneId;
    public DbClusterList withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
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
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbClusterList withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}