package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestInvokeAuthorizerRequestBodyTlsContext
 * Specifies the TLS context to use for the test authorizer request.
**/
public class TestInvokeAuthorizerRequestBodyTlsContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverName")
    public String serverName;
    public TestInvokeAuthorizerRequestBodyTlsContext withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}