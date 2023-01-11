package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWebsiteAuthorizationProvidersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWebsiteAuthorizationProvidersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebsiteAuthorizationProviders")
    public WebsiteAuthorizationProviderSummary[] websiteAuthorizationProviders;
    public ListWebsiteAuthorizationProvidersResponse withWebsiteAuthorizationProviders(WebsiteAuthorizationProviderSummary[] websiteAuthorizationProviders) {
        this.websiteAuthorizationProviders = websiteAuthorizationProviders;
        return this;
    }
}