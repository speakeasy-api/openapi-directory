package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContactListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactLists")
    public ContactList[] contactLists;
    public ListContactListsResponse withContactLists(ContactList[] contactLists) {
        this.contactLists = contactLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListContactListsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}