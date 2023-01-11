package openapisdk.models.shared;



public class GlobalClustersMessage {
    public GlobalClusterList[] globalClusters;
    public GlobalClustersMessage withGlobalClusters(GlobalClusterList[] globalClusters) {
        this.globalClusters = globalClusters;
        return this;
    }
    public String marker;
    public GlobalClustersMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}