package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpGatewayRouteMatch
 * An object that represents the criteria for determining a request match.
**/
public class HttpGatewayRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public HttpGatewayRouteHeader[] headers;
    public HttpGatewayRouteMatch withHeaders(HttpGatewayRouteHeader[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public GatewayRouteHostnameMatch hostname;
    public HttpGatewayRouteMatch withHostname(GatewayRouteHostnameMatch hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public HttpMethodEnum method;
    public HttpGatewayRouteMatch withMethod(HttpMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public HttpPathMatch path;
    public HttpGatewayRouteMatch withPath(HttpPathMatch path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public HttpGatewayRouteMatch withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public HttpQueryParameter[] queryParameters;
    public HttpGatewayRouteMatch withQueryParameters(HttpQueryParameter[] queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
}