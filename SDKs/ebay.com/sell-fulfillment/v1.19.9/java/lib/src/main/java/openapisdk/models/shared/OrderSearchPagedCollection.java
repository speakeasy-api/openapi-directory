package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderSearchPagedCollection
 * This type contains the specifications for the collection of orders that match the search or filter criteria of a getOrders call. The collection is grouped into a result set, and based on the query parameters that are set (including the limit and offset parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.
**/
public class OrderSearchPagedCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public OrderSearchPagedCollection withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public OrderSearchPagedCollection withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public OrderSearchPagedCollection withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public OrderSearchPagedCollection withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orders")
    public Order[] orders;
    public OrderSearchPagedCollection withOrders(Order[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public OrderSearchPagedCollection withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public OrderSearchPagedCollection withTotal(Integer total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public OrderSearchPagedCollection withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}