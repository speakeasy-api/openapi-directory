package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResendConfirmationCodeResponse
 * The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
**/
public class ResendConfirmationCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeDeliveryDetails")
    public CodeDeliveryDetailsType codeDeliveryDetails;
    public ResendConfirmationCodeResponse withCodeDeliveryDetails(CodeDeliveryDetailsType codeDeliveryDetails) {
        this.codeDeliveryDetails = codeDeliveryDetails;
        return this;
    }
}