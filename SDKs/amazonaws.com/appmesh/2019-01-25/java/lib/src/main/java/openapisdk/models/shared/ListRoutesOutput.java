package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRoutesOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class ListRoutesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRoutesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("routes")
    public RouteRef[] routes;
    public ListRoutesOutput withRoutes(RouteRef[] routes) {
        this.routes = routes;
        return this;
    }
}