package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsTemplateResponse
 * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
public class SmsTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public SmsTemplateResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public SmsTemplateResponse withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("CreationDate")
    public String creationDate;
    public SmsTemplateResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultSubstitutions")
    public String defaultSubstitutions;
    public SmsTemplateResponse withDefaultSubstitutions(String defaultSubstitutions) {
        this.defaultSubstitutions = defaultSubstitutions;
        return this;
    }
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public SmsTemplateResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommenderId")
    public String recommenderId;
    public SmsTemplateResponse withRecommenderId(String recommenderId) {
        this.recommenderId = recommenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateDescription")
    public String templateDescription;
    public SmsTemplateResponse withTemplateDescription(String templateDescription) {
        this.templateDescription = templateDescription;
        return this;
    }
    @JsonProperty("TemplateName")
    public String templateName;
    public SmsTemplateResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonProperty("TemplateType")
    public TemplateTypeEnum templateType;
    public SmsTemplateResponse withTemplateType(TemplateTypeEnum templateType) {
        this.templateType = templateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public SmsTemplateResponse withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public SmsTemplateResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}