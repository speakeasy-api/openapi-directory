package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTagKeysOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public GetTagKeysOutput withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public GetTagKeysOutput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}