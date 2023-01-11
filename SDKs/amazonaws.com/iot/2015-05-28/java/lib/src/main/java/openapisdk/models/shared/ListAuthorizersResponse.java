package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAuthorizersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizers")
    public AuthorizerSummary[] authorizers;
    public ListAuthorizersResponse withAuthorizers(AuthorizerSummary[] authorizers) {
        this.authorizers = authorizers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListAuthorizersResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}