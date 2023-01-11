package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestInvokeAuthorizerRequestBodyHttpContext
 * Specifies the HTTP context to use for the test authorizer request.
**/
public class TestInvokeAuthorizerRequestBodyHttpContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public TestInvokeAuthorizerRequestBodyHttpContext withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryString")
    public String queryString;
    public TestInvokeAuthorizerRequestBodyHttpContext withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
}