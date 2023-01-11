package openapisdk.models.shared;



public class ClusterDbRevisionsMessage {
    public ClusterDbRevisionsList[] clusterDbRevisions;
    public ClusterDbRevisionsMessage withClusterDbRevisions(ClusterDbRevisionsList[] clusterDbRevisions) {
        this.clusterDbRevisions = clusterDbRevisions;
        return this;
    }
    public String marker;
    public ClusterDbRevisionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}