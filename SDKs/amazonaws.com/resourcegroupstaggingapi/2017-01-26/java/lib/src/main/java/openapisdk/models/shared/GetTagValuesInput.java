package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTagValuesInput {
    @JsonProperty("Key")
    public String key;
    public GetTagValuesInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public GetTagValuesInput withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}