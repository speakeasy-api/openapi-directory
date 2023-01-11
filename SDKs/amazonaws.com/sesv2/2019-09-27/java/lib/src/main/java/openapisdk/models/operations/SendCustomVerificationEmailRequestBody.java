package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendCustomVerificationEmailRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;
    public SendCustomVerificationEmailRequestBody withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public SendCustomVerificationEmailRequestBody withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonProperty("TemplateName")
    public String templateName;
    public SendCustomVerificationEmailRequestBody withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}