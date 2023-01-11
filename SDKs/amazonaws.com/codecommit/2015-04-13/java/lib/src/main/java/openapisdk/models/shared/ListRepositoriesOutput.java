package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRepositoriesOutput
 * Represents the output of a list repositories operation.
**/
public class ListRepositoriesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRepositoriesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public RepositoryNameIdPair[] repositories;
    public ListRepositoriesOutput withRepositories(RepositoryNameIdPair[] repositories) {
        this.repositories = repositories;
        return this;
    }
}