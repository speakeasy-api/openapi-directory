package openapisdk.models.shared;



/**
 * ResumeClusterMessage
 * Describes a resume cluster operation. For example, a scheduled action to run the <code>ResumeCluster</code> API operation. 
**/
public class ResumeClusterMessage {
    public String clusterIdentifier;
    public ResumeClusterMessage withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
}