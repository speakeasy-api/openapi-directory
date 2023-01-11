package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClustersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusters")
    public String[] clusters;
    public DescribeClustersRequest withClusters(String[] clusters) {
        this.clusters = clusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public ClusterFieldEnum[] include;
    public DescribeClustersRequest withInclude(ClusterFieldEnum[] include) {
        this.include = include;
        return this;
    }
}