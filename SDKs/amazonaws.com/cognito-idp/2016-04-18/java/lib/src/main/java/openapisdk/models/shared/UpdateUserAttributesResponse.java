package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserAttributesResponse
 * Represents the response from the server for the request to update user attributes.
**/
public class UpdateUserAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeDeliveryDetailsList")
    public CodeDeliveryDetailsType[] codeDeliveryDetailsList;
    public UpdateUserAttributesResponse withCodeDeliveryDetailsList(CodeDeliveryDetailsType[] codeDeliveryDetailsList) {
        this.codeDeliveryDetailsList = codeDeliveryDetailsList;
        return this;
    }
}