package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmissionEntryFrom
 * Identifies the sender.
 * 
 * Instead of a structured object, you can supply a string value here. 
 * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
 * 
**/
public class SubmissionEntryFrom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public SubmissionEntryFrom withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("type")
    public SubmissionEntryFromTypeEnum type;
    public SubmissionEntryFrom withType(SubmissionEntryFromTypeEnum type) {
        this.type = type;
        return this;
    }
}