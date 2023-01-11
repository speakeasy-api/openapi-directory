package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContactChannelsResult {
    @JsonProperty("ContactChannels")
    public ContactChannel[] contactChannels;
    public ListContactChannelsResult withContactChannels(ContactChannel[] contactChannels) {
        this.contactChannels = contactChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListContactChannelsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}