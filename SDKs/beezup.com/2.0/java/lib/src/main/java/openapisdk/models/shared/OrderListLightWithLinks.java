package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderListLightWithLinks {
    @JsonProperty("links")
    public OrderListLightLinks links;
    public OrderListLightWithLinks withLinks(OrderListLightLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("orders")
    public OrderHeaderWithLinks[] orders;
    public OrderListLightWithLinks withOrders(OrderHeaderWithLinks[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonProperty("paginationResult")
    public PaginationResult paginationResult;
    public OrderListLightWithLinks withPaginationResult(PaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}