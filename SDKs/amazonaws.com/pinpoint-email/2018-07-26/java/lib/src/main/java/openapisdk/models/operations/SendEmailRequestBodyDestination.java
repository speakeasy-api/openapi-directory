package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendEmailRequestBodyDestination
 * An object that describes the recipients for an email.
**/
public class SendEmailRequestBodyDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BccAddresses")
    public String[] bccAddresses;
    public SendEmailRequestBodyDestination withBccAddresses(String[] bccAddresses) {
        this.bccAddresses = bccAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CcAddresses")
    public String[] ccAddresses;
    public SendEmailRequestBodyDestination withCcAddresses(String[] ccAddresses) {
        this.ccAddresses = ccAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ToAddresses")
    public String[] toAddresses;
    public SendEmailRequestBodyDestination withToAddresses(String[] toAddresses) {
        this.toAddresses = toAddresses;
        return this;
    }
}