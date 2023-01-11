package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClustersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusters")
    public Cluster[] clusters;
    public DescribeClustersResponse withClusters(Cluster[] clusters) {
        this.clusters = clusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public DescribeClustersResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
}