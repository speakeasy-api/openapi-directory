package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NewPaymentRequestNewPaymentRequestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public NewPaymentRequestNewPaymentRequestResponse withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NewPaymentRequestNewPaymentRequestResponseTypeEnum type;
    public NewPaymentRequestNewPaymentRequestResponse withType(NewPaymentRequestNewPaymentRequestResponseTypeEnum type) {
        this.type = type;
        return this;
    }
}