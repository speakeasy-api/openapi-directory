package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteNamedQueryInput {
    @JsonProperty("NamedQueryId")
    public String namedQueryId;
    public DeleteNamedQueryInput withNamedQueryId(String namedQueryId) {
        this.namedQueryId = namedQueryId;
        return this;
    }
}