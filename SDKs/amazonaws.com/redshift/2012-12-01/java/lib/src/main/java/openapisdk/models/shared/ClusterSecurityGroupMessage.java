package openapisdk.models.shared;



/**
 * ClusterSecurityGroupMessage
 * <p/>
**/
public class ClusterSecurityGroupMessage {
    public ClusterSecurityGroups[] clusterSecurityGroups;
    public ClusterSecurityGroupMessage withClusterSecurityGroups(ClusterSecurityGroups[] clusterSecurityGroups) {
        this.clusterSecurityGroups = clusterSecurityGroups;
        return this;
    }
    public String marker;
    public ClusterSecurityGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}