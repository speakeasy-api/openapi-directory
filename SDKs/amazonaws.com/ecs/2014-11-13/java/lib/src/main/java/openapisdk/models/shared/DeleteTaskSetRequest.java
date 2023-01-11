package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTaskSetRequest {
    @JsonProperty("cluster")
    public String cluster;
    public DeleteTaskSetRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public DeleteTaskSetRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public DeleteTaskSetRequest withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("taskSet")
    public String taskSet;
    public DeleteTaskSetRequest withTaskSet(String taskSet) {
        this.taskSet = taskSet;
        return this;
    }
}