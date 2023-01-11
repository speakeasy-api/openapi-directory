package openapisdk.models.shared;



/**
 * ClusterSubnetGroupMessage
 * Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
**/
public class ClusterSubnetGroupMessage {
    public ClusterSubnetGroups[] clusterSubnetGroups;
    public ClusterSubnetGroupMessage withClusterSubnetGroups(ClusterSubnetGroups[] clusterSubnetGroups) {
        this.clusterSubnetGroups = clusterSubnetGroups;
        return this;
    }
    public String marker;
    public ClusterSubnetGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}