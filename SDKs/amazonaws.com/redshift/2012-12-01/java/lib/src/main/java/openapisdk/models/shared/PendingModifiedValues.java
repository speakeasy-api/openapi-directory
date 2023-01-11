package openapisdk.models.shared;



/**
 * PendingModifiedValues
 * Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
**/
public class PendingModifiedValues {
    public Long automatedSnapshotRetentionPeriod;
    public PendingModifiedValues withAutomatedSnapshotRetentionPeriod(Long automatedSnapshotRetentionPeriod) {
        this.automatedSnapshotRetentionPeriod = automatedSnapshotRetentionPeriod;
        return this;
    }
    public String clusterIdentifier;
    public PendingModifiedValues withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public String clusterType;
    public PendingModifiedValues withClusterType(String clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String clusterVersion;
    public PendingModifiedValues withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    public String encryptionType;
    public PendingModifiedValues withEncryptionType(String encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    public Boolean enhancedVpcRouting;
    public PendingModifiedValues withEnhancedVpcRouting(Boolean enhancedVpcRouting) {
        this.enhancedVpcRouting = enhancedVpcRouting;
        return this;
    }
    public String maintenanceTrackName;
    public PendingModifiedValues withMaintenanceTrackName(String maintenanceTrackName) {
        this.maintenanceTrackName = maintenanceTrackName;
        return this;
    }
    public String masterUserPassword;
    public PendingModifiedValues withMasterUserPassword(String masterUserPassword) {
        this.masterUserPassword = masterUserPassword;
        return this;
    }
    public String nodeType;
    public PendingModifiedValues withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    public Long numberOfNodes;
    public PendingModifiedValues withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
    public Boolean publiclyAccessible;
    public PendingModifiedValues withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
}