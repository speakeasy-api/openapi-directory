package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestInvokeAuthorizerRequestBodyMqttContext
 * Specifies the MQTT context to use for the test authorizer request
**/
public class TestInvokeAuthorizerRequestBodyMqttContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public TestInvokeAuthorizerRequestBodyMqttContext withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public TestInvokeAuthorizerRequestBodyMqttContext withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public TestInvokeAuthorizerRequestBodyMqttContext withUsername(String username) {
        this.username = username;
        return this;
    }
}