package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailContent
 * Contains the subject and message of an email.
**/
public class EmailContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMessage")
    public String additionalMessage;
    public EmailContent withAdditionalMessage(String additionalMessage) {
        this.additionalMessage = additionalMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public EmailContent withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}