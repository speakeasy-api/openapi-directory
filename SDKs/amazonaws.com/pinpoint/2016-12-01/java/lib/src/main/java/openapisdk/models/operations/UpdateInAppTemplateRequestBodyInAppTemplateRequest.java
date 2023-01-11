package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateInAppTemplateRequestBodyInAppTemplateRequest
 * InApp Template Request.
**/
public class UpdateInAppTemplateRequestBodyInAppTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Content")
    public openapisdk.models.shared.InAppMessageContent[] content;
    public UpdateInAppTemplateRequestBodyInAppTemplateRequest withContent(openapisdk.models.shared.InAppMessageContent[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomConfig")
    public java.util.Map<String, String> customConfig;
    public UpdateInAppTemplateRequestBodyInAppTemplateRequest withCustomConfig(java.util.Map<String, String> customConfig) {
        this.customConfig = customConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layout")
    public openapisdk.models.shared.LayoutEnum layout;
    public UpdateInAppTemplateRequestBodyInAppTemplateRequest withLayout(openapisdk.models.shared.LayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateDescription")
    public String templateDescription;
    public UpdateInAppTemplateRequestBodyInAppTemplateRequest withTemplateDescription(String templateDescription) {
        this.templateDescription = templateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public UpdateInAppTemplateRequestBodyInAppTemplateRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}