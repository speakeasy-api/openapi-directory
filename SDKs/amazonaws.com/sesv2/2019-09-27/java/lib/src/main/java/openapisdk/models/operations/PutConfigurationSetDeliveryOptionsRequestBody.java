package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConfigurationSetDeliveryOptionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingPoolName")
    public String sendingPoolName;
    public PutConfigurationSetDeliveryOptionsRequestBody withSendingPoolName(String sendingPoolName) {
        this.sendingPoolName = sendingPoolName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TlsPolicy")
    public PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum tlsPolicy;
    public PutConfigurationSetDeliveryOptionsRequestBody withTlsPolicy(PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum tlsPolicy) {
        this.tlsPolicy = tlsPolicy;
        return this;
    }
}