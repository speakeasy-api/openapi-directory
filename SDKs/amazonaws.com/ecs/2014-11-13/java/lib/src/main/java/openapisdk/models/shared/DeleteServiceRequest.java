package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public DeleteServiceRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public DeleteServiceRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public DeleteServiceRequest withService(String service) {
        this.service = service;
        return this;
    }
}