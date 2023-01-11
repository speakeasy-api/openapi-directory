package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDatabaseClusterSizeRequestBody {
    @JsonProperty("num_nodes")
    public Integer numNodes;
    public UpdateDatabaseClusterSizeRequestBody withNumNodes(Integer numNodes) {
        this.numNodes = numNodes;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public UpdateDatabaseClusterSizeRequestBody withSize(String size) {
        this.size = size;
        return this;
    }
}