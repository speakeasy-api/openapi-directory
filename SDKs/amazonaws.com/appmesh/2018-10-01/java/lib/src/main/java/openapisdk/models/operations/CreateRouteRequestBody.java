package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateRouteRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("routeName")
    public String routeName;
    public CreateRouteRequestBody withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @JsonProperty("spec")
    public CreateRouteRequestBodySpec spec;
    public CreateRouteRequestBody withSpec(CreateRouteRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}