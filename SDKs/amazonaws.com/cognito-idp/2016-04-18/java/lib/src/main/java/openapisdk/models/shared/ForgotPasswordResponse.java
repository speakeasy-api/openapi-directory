package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForgotPasswordResponse
 * Respresents the response from the server regarding the request to reset a password.
**/
public class ForgotPasswordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeDeliveryDetails")
    public CodeDeliveryDetailsType codeDeliveryDetails;
    public ForgotPasswordResponse withCodeDeliveryDetails(CodeDeliveryDetailsType codeDeliveryDetails) {
        this.codeDeliveryDetails = codeDeliveryDetails;
        return this;
    }
}