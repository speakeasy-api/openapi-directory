package openapisdk.models.shared;



/**
 * ClusterPendingModifiedValues
 * This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
**/
public class ClusterPendingModifiedValues {
    public String dbClusterIdentifier;
    public ClusterPendingModifiedValues withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String engineVersion;
    public ClusterPendingModifiedValues withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public Boolean iamDatabaseAuthenticationEnabled;
    public ClusterPendingModifiedValues withIamDatabaseAuthenticationEnabled(Boolean iamDatabaseAuthenticationEnabled) {
        this.iamDatabaseAuthenticationEnabled = iamDatabaseAuthenticationEnabled;
        return this;
    }
    public String masterUserPassword;
    public ClusterPendingModifiedValues withMasterUserPassword(String masterUserPassword) {
        this.masterUserPassword = masterUserPassword;
        return this;
    }
    public PendingCloudwatchLogsExports pendingCloudwatchLogsExports;
    public ClusterPendingModifiedValues withPendingCloudwatchLogsExports(PendingCloudwatchLogsExports pendingCloudwatchLogsExports) {
        this.pendingCloudwatchLogsExports = pendingCloudwatchLogsExports;
        return this;
    }
}