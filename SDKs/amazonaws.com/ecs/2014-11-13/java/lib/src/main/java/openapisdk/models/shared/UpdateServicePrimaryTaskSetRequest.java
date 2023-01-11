package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServicePrimaryTaskSetRequest {
    @JsonProperty("cluster")
    public String cluster;
    public UpdateServicePrimaryTaskSetRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("primaryTaskSet")
    public String primaryTaskSet;
    public UpdateServicePrimaryTaskSetRequest withPrimaryTaskSet(String primaryTaskSet) {
        this.primaryTaskSet = primaryTaskSet;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateServicePrimaryTaskSetRequest withService(String service) {
        this.service = service;
        return this;
    }
}