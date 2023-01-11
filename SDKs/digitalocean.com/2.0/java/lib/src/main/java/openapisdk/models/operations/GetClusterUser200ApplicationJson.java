package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClusterUser200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes_cluster_user")
    public GetClusterUser200ApplicationJsonKubernetesClusterUser kubernetesClusterUser;
    public GetClusterUser200ApplicationJson withKubernetesClusterUser(GetClusterUser200ApplicationJsonKubernetesClusterUser kubernetesClusterUser) {
        this.kubernetesClusterUser = kubernetesClusterUser;
        return this;
    }
}