package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUiCustomizationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public GetUiCustomizationRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetUiCustomizationRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}