package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateContainerInstancesStateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public UpdateContainerInstancesStateRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("containerInstances")
    public String[] containerInstances;
    public UpdateContainerInstancesStateRequest withContainerInstances(String[] containerInstances) {
        this.containerInstances = containerInstances;
        return this;
    }
    @JsonProperty("status")
    public ContainerInstanceStatusEnum status;
    public UpdateContainerInstancesStateRequest withStatus(ContainerInstanceStatusEnum status) {
        this.status = status;
        return this;
    }
}