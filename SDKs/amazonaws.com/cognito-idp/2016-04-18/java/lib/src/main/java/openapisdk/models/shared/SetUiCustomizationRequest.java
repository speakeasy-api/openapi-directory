package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetUiCustomizationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CSS")
    public String css;
    public SetUiCustomizationRequest withCss(String css) {
        this.css = css;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public SetUiCustomizationRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageFile")
    public String imageFile;
    public SetUiCustomizationRequest withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public SetUiCustomizationRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}