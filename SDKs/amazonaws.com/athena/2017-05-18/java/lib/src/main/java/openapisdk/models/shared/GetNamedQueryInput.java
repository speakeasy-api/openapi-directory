package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNamedQueryInput {
    @JsonProperty("NamedQueryId")
    public String namedQueryId;
    public GetNamedQueryInput withNamedQueryId(String namedQueryId) {
        this.namedQueryId = namedQueryId;
        return this;
    }
}