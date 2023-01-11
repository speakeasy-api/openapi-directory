package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGitHubAccountTokenNamesOutput
 * Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.
**/
public class ListGitHubAccountTokenNamesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListGitHubAccountTokenNamesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenNameList")
    public String[] tokenNameList;
    public ListGitHubAccountTokenNamesOutput withTokenNameList(String[] tokenNameList) {
        this.tokenNameList = tokenNameList;
        return this;
    }
}