package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestInvokeAuthorizerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpContext")
    public TestInvokeAuthorizerRequestBodyHttpContext httpContext;
    public TestInvokeAuthorizerRequestBody withHttpContext(TestInvokeAuthorizerRequestBodyHttpContext httpContext) {
        this.httpContext = httpContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mqttContext")
    public TestInvokeAuthorizerRequestBodyMqttContext mqttContext;
    public TestInvokeAuthorizerRequestBody withMqttContext(TestInvokeAuthorizerRequestBodyMqttContext mqttContext) {
        this.mqttContext = mqttContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsContext")
    public TestInvokeAuthorizerRequestBodyTlsContext tlsContext;
    public TestInvokeAuthorizerRequestBody withTlsContext(TestInvokeAuthorizerRequestBodyTlsContext tlsContext) {
        this.tlsContext = tlsContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public TestInvokeAuthorizerRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenSignature")
    public String tokenSignature;
    public TestInvokeAuthorizerRequestBody withTokenSignature(String tokenSignature) {
        this.tokenSignature = tokenSignature;
        return this;
    }
}