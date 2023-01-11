package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Template
 * An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.
**/
public class Template {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateArn")
    public String templateArn;
    public Template withTemplateArn(String templateArn) {
        this.templateArn = templateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateData")
    public String templateData;
    public Template withTemplateData(String templateData) {
        this.templateData = templateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateName")
    public String templateName;
    public Template withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}