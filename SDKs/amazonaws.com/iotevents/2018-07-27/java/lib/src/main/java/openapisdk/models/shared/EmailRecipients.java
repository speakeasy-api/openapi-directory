package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailRecipients
 * <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>
**/
public class EmailRecipients {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public RecipientDetail[] to;
    public EmailRecipients withTo(RecipientDetail[] to) {
        this.to = to;
        return this;
    }
}