package openapisdk.models.shared;



/**
 * ClusterVersionsMessage
 * Contains the output from the <a>DescribeClusterVersions</a> action. 
**/
public class ClusterVersionsMessage {
    public ClusterVersionList[] clusterVersions;
    public ClusterVersionsMessage withClusterVersions(ClusterVersionList[] clusterVersions) {
        this.clusterVersions = clusterVersions;
        return this;
    }
    public String marker;
    public ClusterVersionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}