package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateInAppTemplateRequestBody {
    @JsonProperty("InAppTemplateRequest")
    public UpdateInAppTemplateRequestBodyInAppTemplateRequest inAppTemplateRequest;
    public UpdateInAppTemplateRequestBody withInAppTemplateRequest(UpdateInAppTemplateRequestBodyInAppTemplateRequest inAppTemplateRequest) {
        this.inAppTemplateRequest = inAppTemplateRequest;
        return this;
    }
}