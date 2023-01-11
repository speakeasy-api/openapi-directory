package openapisdk.models.shared;



/**
 * ClusterNode
 * The identifier of a node in a cluster.
**/
public class ClusterNode {
    public String nodeRole;
    public ClusterNode withNodeRole(String nodeRole) {
        this.nodeRole = nodeRole;
        return this;
    }
    public String privateIPAddress;
    public ClusterNode withPrivateIpAddress(String privateIPAddress) {
        this.privateIPAddress = privateIPAddress;
        return this;
    }
    public String publicIPAddress;
    public ClusterNode withPublicIpAddress(String publicIPAddress) {
        this.publicIPAddress = publicIPAddress;
        return this;
    }
}