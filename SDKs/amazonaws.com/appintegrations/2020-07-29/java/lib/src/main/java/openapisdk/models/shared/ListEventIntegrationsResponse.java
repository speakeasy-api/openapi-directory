package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventIntegrationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventIntegrations")
    public EventIntegration[] eventIntegrations;
    public ListEventIntegrationsResponse withEventIntegrations(EventIntegration[] eventIntegrations) {
        this.eventIntegrations = eventIntegrations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventIntegrationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}