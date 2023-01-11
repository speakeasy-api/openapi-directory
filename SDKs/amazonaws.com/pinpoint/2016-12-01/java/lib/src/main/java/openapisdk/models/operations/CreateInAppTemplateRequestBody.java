package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateInAppTemplateRequestBody {
    @JsonProperty("InAppTemplateRequest")
    public CreateInAppTemplateRequestBodyInAppTemplateRequest inAppTemplateRequest;
    public CreateInAppTemplateRequestBody withInAppTemplateRequest(CreateInAppTemplateRequestBodyInAppTemplateRequest inAppTemplateRequest) {
        this.inAppTemplateRequest = inAppTemplateRequest;
        return this;
    }
}