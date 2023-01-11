package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginationResult {
    @JsonProperty("entryCount")
    public Long entryCount;
    public PaginationResult withEntryCount(Long entryCount) {
        this.entryCount = entryCount;
        return this;
    }
    @JsonProperty("links")
    public PaginationResultLinks links;
    public PaginationResult withLinks(PaginationResultLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("pageCount")
    public Long pageCount;
    public PaginationResult withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonProperty("totalEntryCount")
    public Long totalEntryCount;
    public PaginationResult withTotalEntryCount(Long totalEntryCount) {
        this.totalEntryCount = totalEntryCount;
        return this;
    }
}