package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApplicationsInput
 * Represents the input of a <code>ListApplications</code> operation.
**/
public class ListApplicationsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListApplicationsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}