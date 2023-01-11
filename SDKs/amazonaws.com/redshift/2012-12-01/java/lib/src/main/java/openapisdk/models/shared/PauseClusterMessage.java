package openapisdk.models.shared;



/**
 * PauseClusterMessage
 * Describes a pause cluster operation. For example, a scheduled action to run the <code>PauseCluster</code> API operation. 
**/
public class PauseClusterMessage {
    public String clusterIdentifier;
    public PauseClusterMessage withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
}