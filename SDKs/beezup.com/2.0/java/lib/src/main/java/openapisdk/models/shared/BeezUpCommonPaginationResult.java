package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BeezUpCommonPaginationResult {
    @JsonProperty("entryCount")
    public Long entryCount;
    public BeezUpCommonPaginationResult withEntryCount(Long entryCount) {
        this.entryCount = entryCount;
        return this;
    }
    @JsonProperty("links")
    public BeezUpCommonPaginationResultLinks links;
    public BeezUpCommonPaginationResult withLinks(BeezUpCommonPaginationResultLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("pageCount")
    public Long pageCount;
    public BeezUpCommonPaginationResult withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonProperty("totalEntryCount")
    public Long totalEntryCount;
    public BeezUpCommonPaginationResult withTotalEntryCount(Long totalEntryCount) {
        this.totalEntryCount = totalEntryCount;
        return this;
    }
}