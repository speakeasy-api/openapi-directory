package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignUpResponse
 * The response from the server for a registration request.
**/
public class SignUpResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeDeliveryDetails")
    public CodeDeliveryDetailsType codeDeliveryDetails;
    public SignUpResponse withCodeDeliveryDetails(CodeDeliveryDetailsType codeDeliveryDetails) {
        this.codeDeliveryDetails = codeDeliveryDetails;
        return this;
    }
    @JsonProperty("UserConfirmed")
    public Boolean userConfirmed;
    public SignUpResponse withUserConfirmed(Boolean userConfirmed) {
        this.userConfirmed = userConfirmed;
        return this;
    }
    @JsonProperty("UserSub")
    public String userSub;
    public SignUpResponse withUserSub(String userSub) {
        this.userSub = userSub;
        return this;
    }
}