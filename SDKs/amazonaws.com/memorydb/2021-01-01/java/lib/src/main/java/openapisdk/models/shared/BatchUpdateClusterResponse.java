package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdateClusterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessedClusters")
    public Cluster[] processedClusters;
    public BatchUpdateClusterResponse withProcessedClusters(Cluster[] processedClusters) {
        this.processedClusters = processedClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedClusters")
    public UnprocessedCluster[] unprocessedClusters;
    public BatchUpdateClusterResponse withUnprocessedClusters(UnprocessedCluster[] unprocessedClusters) {
        this.unprocessedClusters = unprocessedClusters;
        return this;
    }
}