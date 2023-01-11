package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMitigationActionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionIdentifiers")
    public MitigationActionIdentifier[] actionIdentifiers;
    public ListMitigationActionsResponse withActionIdentifiers(MitigationActionIdentifier[] actionIdentifiers) {
        this.actionIdentifiers = actionIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListMitigationActionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}