package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpParameters
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
**/
public class HttpParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HeaderParameters")
    public java.util.Map<String, String> headerParameters;
    public HttpParameters withHeaderParameters(java.util.Map<String, String> headerParameters) {
        this.headerParameters = headerParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PathParameterValues")
    public String[] pathParameterValues;
    public HttpParameters withPathParameterValues(String[] pathParameterValues) {
        this.pathParameterValues = pathParameterValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryStringParameters")
    public java.util.Map<String, String> queryStringParameters;
    public HttpParameters withQueryStringParameters(java.util.Map<String, String> queryStringParameters) {
        this.queryStringParameters = queryStringParameters;
        return this;
    }
}