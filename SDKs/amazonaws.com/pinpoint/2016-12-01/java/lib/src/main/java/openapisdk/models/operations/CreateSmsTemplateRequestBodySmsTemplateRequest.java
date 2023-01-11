package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSmsTemplateRequestBodySmsTemplateRequest
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
public class CreateSmsTemplateRequestBodySmsTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public CreateSmsTemplateRequestBodySmsTemplateRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultSubstitutions")
    public String defaultSubstitutions;
    public CreateSmsTemplateRequestBodySmsTemplateRequest withDefaultSubstitutions(String defaultSubstitutions) {
        this.defaultSubstitutions = defaultSubstitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommenderId")
    public String recommenderId;
    public CreateSmsTemplateRequestBodySmsTemplateRequest withRecommenderId(String recommenderId) {
        this.recommenderId = recommenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateDescription")
    public String templateDescription;
    public CreateSmsTemplateRequestBodySmsTemplateRequest withTemplateDescription(String templateDescription) {
        this.templateDescription = templateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateSmsTemplateRequestBodySmsTemplateRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}