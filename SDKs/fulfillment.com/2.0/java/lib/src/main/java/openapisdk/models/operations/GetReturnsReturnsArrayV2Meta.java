package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReturnsReturnsArrayV2Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public GetReturnsReturnsArrayV2MetaPaginationV2 pagination;
    public GetReturnsReturnsArrayV2Meta withPagination(GetReturnsReturnsArrayV2MetaPaginationV2 pagination) {
        this.pagination = pagination;
        return this;
    }
}