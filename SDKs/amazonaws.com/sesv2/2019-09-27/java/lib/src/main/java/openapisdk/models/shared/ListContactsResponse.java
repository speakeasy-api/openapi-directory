package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Contacts")
    public Contact[] contacts;
    public ListContactsResponse withContacts(Contact[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListContactsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}