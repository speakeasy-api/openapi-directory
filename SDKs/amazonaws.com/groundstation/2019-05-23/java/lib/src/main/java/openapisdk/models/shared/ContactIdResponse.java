package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactIdResponse
 * <p/>
**/
public class ContactIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactId")
    public String contactId;
    public ContactIdResponse withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}