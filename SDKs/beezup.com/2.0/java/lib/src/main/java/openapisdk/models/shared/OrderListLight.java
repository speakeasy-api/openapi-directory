package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderListLight
 * The order list with minimum information we have from the orders.\
 * The paginationResult properties can be null if the list is empty.
 * 
**/
public class OrderListLight {
    @JsonProperty("links")
    public OrderListLightLinks links;
    public OrderListLight withLinks(OrderListLightLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("orders")
    public OrderHeader[] orders;
    public OrderListLight withOrders(OrderHeader[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public OrderListLight withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}