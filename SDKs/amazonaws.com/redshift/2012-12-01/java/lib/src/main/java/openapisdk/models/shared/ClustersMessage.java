package openapisdk.models.shared;



/**
 * ClustersMessage
 * Contains the output from the <a>DescribeClusters</a> action. 
**/
public class ClustersMessage {
    public ClusterList[] clusters;
    public ClustersMessage withClusters(ClusterList[] clusters) {
        this.clusters = clusters;
        return this;
    }
    public String marker;
    public ClustersMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}