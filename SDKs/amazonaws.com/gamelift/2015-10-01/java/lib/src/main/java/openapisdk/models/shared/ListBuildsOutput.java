package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBuildsOutput
 * Represents the returned data in response to a request operation.
**/
public class ListBuildsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Builds")
    public Build[] builds;
    public ListBuildsOutput withBuilds(Build[] builds) {
        this.builds = builds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListBuildsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}