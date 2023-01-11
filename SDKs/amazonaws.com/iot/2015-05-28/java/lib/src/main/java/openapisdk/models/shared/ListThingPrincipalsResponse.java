package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListThingPrincipalsResponse
 * The output from the ListThingPrincipals operation.
**/
public class ListThingPrincipalsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListThingPrincipalsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principals")
    public String[] principals;
    public ListThingPrincipalsResponse withPrincipals(String[] principals) {
        this.principals = principals;
        return this;
    }
}