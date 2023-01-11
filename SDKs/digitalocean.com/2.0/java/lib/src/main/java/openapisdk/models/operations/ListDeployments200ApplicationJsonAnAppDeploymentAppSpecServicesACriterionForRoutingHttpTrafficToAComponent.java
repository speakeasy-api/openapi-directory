package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent withPath(String path) {
        this.path = path;
        return this;
    }
}