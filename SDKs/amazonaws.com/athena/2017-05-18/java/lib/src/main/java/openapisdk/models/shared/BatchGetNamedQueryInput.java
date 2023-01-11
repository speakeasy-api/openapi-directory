package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetNamedQueryInput {
    @JsonProperty("NamedQueryIds")
    public String[] namedQueryIds;
    public BatchGetNamedQueryInput withNamedQueryIds(String[] namedQueryIds) {
        this.namedQueryIds = namedQueryIds;
        return this;
    }
}