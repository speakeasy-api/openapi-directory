package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterPendingModifiedValues
 * Changes to the Amazon Redshift cluster that are currently pending.
**/
public class AwsRedshiftClusterPendingModifiedValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutomatedSnapshotRetentionPeriod")
    public Long automatedSnapshotRetentionPeriod;
    public AwsRedshiftClusterPendingModifiedValues withAutomatedSnapshotRetentionPeriod(Long automatedSnapshotRetentionPeriod) {
        this.automatedSnapshotRetentionPeriod = automatedSnapshotRetentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public AwsRedshiftClusterPendingModifiedValues withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterType")
    public String clusterType;
    public AwsRedshiftClusterPendingModifiedValues withClusterType(String clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterVersion")
    public String clusterVersion;
    public AwsRedshiftClusterPendingModifiedValues withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public String encryptionType;
    public AwsRedshiftClusterPendingModifiedValues withEncryptionType(String encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnhancedVpcRouting")
    public Boolean enhancedVpcRouting;
    public AwsRedshiftClusterPendingModifiedValues withEnhancedVpcRouting(Boolean enhancedVpcRouting) {
        this.enhancedVpcRouting = enhancedVpcRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintenanceTrackName")
    public String maintenanceTrackName;
    public AwsRedshiftClusterPendingModifiedValues withMaintenanceTrackName(String maintenanceTrackName) {
        this.maintenanceTrackName = maintenanceTrackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MasterUserPassword")
    public String masterUserPassword;
    public AwsRedshiftClusterPendingModifiedValues withMasterUserPassword(String masterUserPassword) {
        this.masterUserPassword = masterUserPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeType")
    public String nodeType;
    public AwsRedshiftClusterPendingModifiedValues withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfNodes")
    public Long numberOfNodes;
    public AwsRedshiftClusterPendingModifiedValues withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PubliclyAccessible")
    public Boolean publiclyAccessible;
    public AwsRedshiftClusterPendingModifiedValues withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
}