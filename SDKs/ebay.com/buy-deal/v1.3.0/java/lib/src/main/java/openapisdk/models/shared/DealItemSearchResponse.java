package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealItemSearchResponse
 * The result set for the deal item search.
**/
public class DealItemSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealItems")
    public DealItem[] dealItems;
    public DealItemSearchResponse withDealItems(DealItem[] dealItems) {
        this.dealItems = dealItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public DealItemSearchResponse withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public DealItemSearchResponse withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public DealItemSearchResponse withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public DealItemSearchResponse withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public DealItemSearchResponse withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public DealItemSearchResponse withTotal(Integer total) {
        this.total = total;
        return this;
    }
}