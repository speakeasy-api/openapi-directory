package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListingRespPaginated {
    @JsonProperty("listings")
    public Listing[] listings;
    public ListingRespPaginated withListings(Listing[] listings) {
        this.listings = listings;
        return this;
    }
    @JsonProperty("maxPages")
    public Long maxPages;
    public ListingRespPaginated withMaxPages(Long maxPages) {
        this.maxPages = maxPages;
        return this;
    }
    @JsonProperty("page")
    public Long page;
    public ListingRespPaginated withPage(Long page) {
        this.page = page;
        return this;
    }
}