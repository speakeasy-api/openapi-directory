package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEulasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulas")
    public Eula[] eulas;
    public ListEulasResponse withEulas(Eula[] eulas) {
        this.eulas = eulas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEulasResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}