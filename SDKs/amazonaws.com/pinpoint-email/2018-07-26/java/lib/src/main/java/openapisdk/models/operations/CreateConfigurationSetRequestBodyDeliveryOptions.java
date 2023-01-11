package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConfigurationSetRequestBodyDeliveryOptions
 * Used to associate a configuration set with a dedicated IP pool.
**/
public class CreateConfigurationSetRequestBodyDeliveryOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingPoolName")
    public String sendingPoolName;
    public CreateConfigurationSetRequestBodyDeliveryOptions withSendingPoolName(String sendingPoolName) {
        this.sendingPoolName = sendingPoolName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TlsPolicy")
    public openapisdk.models.shared.TlsPolicyEnum tlsPolicy;
    public CreateConfigurationSetRequestBodyDeliveryOptions withTlsPolicy(openapisdk.models.shared.TlsPolicyEnum tlsPolicy) {
        this.tlsPolicy = tlsPolicy;
        return this;
    }
}