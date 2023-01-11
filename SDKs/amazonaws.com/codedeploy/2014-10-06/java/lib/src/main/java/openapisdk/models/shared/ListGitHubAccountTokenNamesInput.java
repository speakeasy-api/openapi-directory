package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGitHubAccountTokenNamesInput
 * Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.
**/
public class ListGitHubAccountTokenNamesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListGitHubAccountTokenNamesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}