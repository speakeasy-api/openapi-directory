package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRepositoryAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRepositoryAssociationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryAssociationSummaries")
    public RepositoryAssociationSummary[] repositoryAssociationSummaries;
    public ListRepositoryAssociationsResponse withRepositoryAssociationSummaries(RepositoryAssociationSummary[] repositoryAssociationSummaries) {
        this.repositoryAssociationSummaries = repositoryAssociationSummaries;
        return this;
    }
}