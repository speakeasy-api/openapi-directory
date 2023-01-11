package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInventoryItemInventoryArrayV2MetaPaginationV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetInventoryItemInventoryArrayV2MetaPaginationV2 withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPage")
    public Long currentPage;
    public GetInventoryItemInventoryArrayV2MetaPaginationV2 withCurrentPage(Long currentPage) {
        this.currentPage = currentPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GetInventoryItemInventoryArrayV2MetaPaginationV2 withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPages")
    public Long totalPages;
    public GetInventoryItemInventoryArrayV2MetaPaginationV2 withTotalPages(Long totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}