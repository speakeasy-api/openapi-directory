package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContactRequest {
    @JsonProperty("ContactId")
    public String contactId;
    public DeleteContactRequest withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}