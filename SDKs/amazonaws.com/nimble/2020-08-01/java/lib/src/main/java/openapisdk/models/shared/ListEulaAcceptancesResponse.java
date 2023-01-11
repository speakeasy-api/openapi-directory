package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEulaAcceptancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaAcceptances")
    public EulaAcceptance[] eulaAcceptances;
    public ListEulaAcceptancesResponse withEulaAcceptances(EulaAcceptance[] eulaAcceptances) {
        this.eulaAcceptances = eulaAcceptances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEulaAcceptancesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}