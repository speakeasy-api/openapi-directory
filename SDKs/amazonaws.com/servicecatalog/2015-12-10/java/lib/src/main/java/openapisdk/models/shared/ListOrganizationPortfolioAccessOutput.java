package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOrganizationPortfolioAccessOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListOrganizationPortfolioAccessOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationNodes")
    public OrganizationNode[] organizationNodes;
    public ListOrganizationPortfolioAccessOutput withOrganizationNodes(OrganizationNode[] organizationNodes) {
        this.organizationNodes = organizationNodes;
        return this;
    }
}