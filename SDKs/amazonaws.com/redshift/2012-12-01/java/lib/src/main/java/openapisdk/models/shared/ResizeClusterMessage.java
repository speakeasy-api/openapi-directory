package openapisdk.models.shared;



/**
 * ResizeClusterMessage
 * Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. 
**/
public class ResizeClusterMessage {
    public Boolean classic;
    public ResizeClusterMessage withClassic(Boolean classic) {
        this.classic = classic;
        return this;
    }
    public String clusterIdentifier;
    public ResizeClusterMessage withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public String clusterType;
    public ResizeClusterMessage withClusterType(String clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String nodeType;
    public ResizeClusterMessage withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    public Long numberOfNodes;
    public ResizeClusterMessage withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
}