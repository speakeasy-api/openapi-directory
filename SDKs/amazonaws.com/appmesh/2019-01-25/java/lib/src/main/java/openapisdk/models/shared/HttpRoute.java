package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRoute
 * An object that represents an HTTP or HTTP/2 route type.
**/
public class HttpRoute {
    @JsonProperty("action")
    public HttpRouteAction action;
    public HttpRoute withAction(HttpRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("match")
    public HttpRouteMatch match;
    public HttpRoute withMatch(HttpRouteMatch match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryPolicy")
    public HttpRetryPolicy retryPolicy;
    public HttpRoute withRetryPolicy(HttpRetryPolicy retryPolicy) {
        this.retryPolicy = retryPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public HttpTimeout timeout;
    public HttpRoute withTimeout(HttpTimeout timeout) {
        this.timeout = timeout;
        return this;
    }
}