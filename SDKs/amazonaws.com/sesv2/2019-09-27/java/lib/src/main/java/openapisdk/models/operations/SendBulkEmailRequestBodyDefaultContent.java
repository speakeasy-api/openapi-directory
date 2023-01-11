package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendBulkEmailRequestBodyDefaultContent
 * An object that contains the body of the message. You can specify a template message.
**/
public class SendBulkEmailRequestBodyDefaultContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Template")
    public openapisdk.models.shared.Template template;
    public SendBulkEmailRequestBodyDefaultContent withTemplate(openapisdk.models.shared.Template template) {
        this.template = template;
        return this;
    }
}