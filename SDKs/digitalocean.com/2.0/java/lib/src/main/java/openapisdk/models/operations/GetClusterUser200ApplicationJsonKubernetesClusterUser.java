package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClusterUser200ApplicationJsonKubernetesClusterUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public String[] groups;
    public GetClusterUser200ApplicationJsonKubernetesClusterUser withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public GetClusterUser200ApplicationJsonKubernetesClusterUser withUsername(String username) {
        this.username = username;
        return this;
    }
}