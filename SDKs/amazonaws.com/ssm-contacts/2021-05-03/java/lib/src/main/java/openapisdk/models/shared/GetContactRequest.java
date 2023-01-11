package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContactRequest {
    @JsonProperty("ContactId")
    public String contactId;
    public GetContactRequest withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}