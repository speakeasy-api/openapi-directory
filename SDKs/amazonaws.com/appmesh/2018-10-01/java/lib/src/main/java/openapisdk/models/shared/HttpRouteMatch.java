package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteMatch
 * An object representing the requirements for a route to match HTTP requests for a virtual
 *          router.
**/
public class HttpRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public HttpRouteMatch withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}