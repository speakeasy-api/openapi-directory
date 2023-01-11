package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUserAttributeVerificationCodeResponse
 * The verification code response returned by the server response to get the user attribute verification code.
**/
public class GetUserAttributeVerificationCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeDeliveryDetails")
    public CodeDeliveryDetailsType codeDeliveryDetails;
    public GetUserAttributeVerificationCodeResponse withCodeDeliveryDetails(CodeDeliveryDetailsType codeDeliveryDetails) {
        this.codeDeliveryDetails = codeDeliveryDetails;
        return this;
    }
}