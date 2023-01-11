package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProtocolsListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListProtocolsListsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolsLists")
    public ProtocolsListDataSummary[] protocolsLists;
    public ListProtocolsListsResponse withProtocolsLists(ProtocolsListDataSummary[] protocolsLists) {
        this.protocolsLists = protocolsLists;
        return this;
    }
}