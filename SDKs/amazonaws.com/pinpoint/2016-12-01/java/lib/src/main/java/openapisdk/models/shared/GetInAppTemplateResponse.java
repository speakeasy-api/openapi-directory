package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInAppTemplateResponse {
    @JsonProperty("InAppTemplateResponse")
    public InAppTemplateResponse inAppTemplateResponse;
    public GetInAppTemplateResponse withInAppTemplateResponse(InAppTemplateResponse inAppTemplateResponse) {
        this.inAppTemplateResponse = inAppTemplateResponse;
        return this;
    }
}