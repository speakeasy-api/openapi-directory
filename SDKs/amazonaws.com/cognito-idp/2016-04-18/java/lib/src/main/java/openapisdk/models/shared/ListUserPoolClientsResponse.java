package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserPoolClientsResponse
 * Represents the response from the server that lists user pool clients.
**/
public class ListUserPoolClientsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListUserPoolClientsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolClients")
    public UserPoolClientDescription[] userPoolClients;
    public ListUserPoolClientsResponse withUserPoolClients(UserPoolClientDescription[] userPoolClients) {
        this.userPoolClients = userPoolClients;
        return this;
    }
}