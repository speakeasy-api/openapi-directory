package openapisdk.models.shared;



/**
 * ClusterVersionList
 * Describes a cluster version, including the parameter group family and description of the version.
**/
public class ClusterVersionList {
    public String clusterParameterGroupFamily;
    public ClusterVersionList withClusterParameterGroupFamily(String clusterParameterGroupFamily) {
        this.clusterParameterGroupFamily = clusterParameterGroupFamily;
        return this;
    }
    public String clusterVersion;
    public ClusterVersionList withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    public String description;
    public ClusterVersionList withDescription(String description) {
        this.description = description;
        return this;
    }
}