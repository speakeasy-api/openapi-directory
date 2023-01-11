package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInventoryItemInventoryArrayV2Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public GetInventoryItemInventoryArrayV2MetaPaginationV2 pagination;
    public GetInventoryItemInventoryArrayV2Meta withPagination(GetInventoryItemInventoryArrayV2MetaPaginationV2 pagination) {
        this.pagination = pagination;
        return this;
    }
}