package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Destination
 * An object that describes the recipients for an email.
**/
public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BccAddresses")
    public String[] bccAddresses;
    public Destination withBccAddresses(String[] bccAddresses) {
        this.bccAddresses = bccAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CcAddresses")
    public String[] ccAddresses;
    public Destination withCcAddresses(String[] ccAddresses) {
        this.ccAddresses = ccAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ToAddresses")
    public String[] toAddresses;
    public Destination withToAddresses(String[] toAddresses) {
        this.toAddresses = toAddresses;
        return this;
    }
}