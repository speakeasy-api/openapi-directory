package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderListFull
 * The order list with all information we have from the orders and its items.\
 * The paginationResult properties can be null if the list is empty.
 * 
**/
public class OrderListFull {
    @JsonProperty("links")
    public OrderListFullLinks links;
    public OrderListFull withLinks(OrderListFullLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("orders")
    public Order[] orders;
    public OrderListFull withOrders(Order[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public OrderListFull withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}