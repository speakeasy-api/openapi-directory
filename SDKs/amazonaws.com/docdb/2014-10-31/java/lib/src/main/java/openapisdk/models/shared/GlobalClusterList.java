package openapisdk.models.shared;



/**
 * GlobalClusterList
 * A data type representing an Amazon DocumentDB global cluster.
**/
public class GlobalClusterList {
    public String databaseName;
    public GlobalClusterList withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    public Boolean deletionProtection;
    public GlobalClusterList withDeletionProtection(Boolean deletionProtection) {
        this.deletionProtection = deletionProtection;
        return this;
    }
    public String engine;
    public GlobalClusterList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public GlobalClusterList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String globalClusterArn;
    public GlobalClusterList withGlobalClusterArn(String globalClusterArn) {
        this.globalClusterArn = globalClusterArn;
        return this;
    }
    public String globalClusterIdentifier;
    public GlobalClusterList withGlobalClusterIdentifier(String globalClusterIdentifier) {
        this.globalClusterIdentifier = globalClusterIdentifier;
        return this;
    }
    public GlobalClusterMemberList[] globalClusterMembers;
    public GlobalClusterList withGlobalClusterMembers(GlobalClusterMemberList[] globalClusterMembers) {
        this.globalClusterMembers = globalClusterMembers;
        return this;
    }
    public String globalClusterResourceId;
    public GlobalClusterList withGlobalClusterResourceId(String globalClusterResourceId) {
        this.globalClusterResourceId = globalClusterResourceId;
        return this;
    }
    public String status;
    public GlobalClusterList withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean storageEncrypted;
    public GlobalClusterList withStorageEncrypted(Boolean storageEncrypted) {
        this.storageEncrypted = storageEncrypted;
        return this;
    }
}