package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTaskSetRequest {
    @JsonProperty("cluster")
    public String cluster;
    public UpdateTaskSetRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("scale")
    public Scale scale;
    public UpdateTaskSetRequest withScale(Scale scale) {
        this.scale = scale;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateTaskSetRequest withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("taskSet")
    public String taskSet;
    public UpdateTaskSetRequest withTaskSet(String taskSet) {
        this.taskSet = taskSet;
        return this;
    }
}