package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedEligibleItemCollection
 * This complex type defines a collection of listings that are eligible for an offer to a buyer.
**/
public class PagedEligibleItemCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibleItems")
    public EligibleItem[] eligibleItems;
    public PagedEligibleItemCollection withEligibleItems(EligibleItem[] eligibleItems) {
        this.eligibleItems = eligibleItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PagedEligibleItemCollection withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public PagedEligibleItemCollection withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PagedEligibleItemCollection withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public PagedEligibleItemCollection withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public PagedEligibleItemCollection withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public PagedEligibleItemCollection withTotal(Integer total) {
        this.total = total;
        return this;
    }
}