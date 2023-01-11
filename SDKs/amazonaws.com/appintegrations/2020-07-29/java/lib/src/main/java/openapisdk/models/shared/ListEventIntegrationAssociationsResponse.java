package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventIntegrationAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventIntegrationAssociations")
    public EventIntegrationAssociation[] eventIntegrationAssociations;
    public ListEventIntegrationAssociationsResponse withEventIntegrationAssociations(EventIntegrationAssociation[] eventIntegrationAssociations) {
        this.eventIntegrationAssociations = eventIntegrationAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventIntegrationAssociationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}