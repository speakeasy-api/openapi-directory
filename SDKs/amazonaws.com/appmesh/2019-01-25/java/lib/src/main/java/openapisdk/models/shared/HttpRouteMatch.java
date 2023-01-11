package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteMatch
 * An object that represents the requirements for a route to match HTTP requests for a virtual router.
**/
public class HttpRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public HttpRouteHeader[] headers;
    public HttpRouteMatch withHeaders(HttpRouteHeader[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public HttpMethodEnum method;
    public HttpRouteMatch withMethod(HttpMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public HttpPathMatch path;
    public HttpRouteMatch withPath(HttpPathMatch path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public HttpRouteMatch withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public HttpQueryParameter[] queryParameters;
    public HttpRouteMatch withQueryParameters(HttpQueryParameter[] queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public HttpSchemeEnum scheme;
    public HttpRouteMatch withScheme(HttpSchemeEnum scheme) {
        this.scheme = scheme;
        return this;
    }
}