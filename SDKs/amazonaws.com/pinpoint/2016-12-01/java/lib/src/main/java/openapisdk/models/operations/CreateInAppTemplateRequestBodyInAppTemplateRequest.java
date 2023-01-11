package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateInAppTemplateRequestBodyInAppTemplateRequest
 * InApp Template Request.
**/
public class CreateInAppTemplateRequestBodyInAppTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Content")
    public openapisdk.models.shared.InAppMessageContent[] content;
    public CreateInAppTemplateRequestBodyInAppTemplateRequest withContent(openapisdk.models.shared.InAppMessageContent[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomConfig")
    public java.util.Map<String, String> customConfig;
    public CreateInAppTemplateRequestBodyInAppTemplateRequest withCustomConfig(java.util.Map<String, String> customConfig) {
        this.customConfig = customConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layout")
    public openapisdk.models.shared.LayoutEnum layout;
    public CreateInAppTemplateRequestBodyInAppTemplateRequest withLayout(openapisdk.models.shared.LayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateDescription")
    public String templateDescription;
    public CreateInAppTemplateRequestBodyInAppTemplateRequest withTemplateDescription(String templateDescription) {
        this.templateDescription = templateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateInAppTemplateRequestBodyInAppTemplateRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}