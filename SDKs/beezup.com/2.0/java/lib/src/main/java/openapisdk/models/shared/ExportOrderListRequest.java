package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportOrderListRequest
 * The message request to export order list. The store identifier is requested to regroup the exportations.
**/
public class ExportOrderListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public ExportOrderListFormatEnum format;
    public ExportOrderListRequest withFormat(ExportOrderListFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("orderListRequestWithoutPagination")
    public OrderListRequestWithoutPagination orderListRequestWithoutPagination;
    public ExportOrderListRequest withOrderListRequestWithoutPagination(OrderListRequestWithoutPagination orderListRequestWithoutPagination) {
        this.orderListRequestWithoutPagination = orderListRequestWithoutPagination;
        return this;
    }
    @JsonProperty("storeId")
    public String storeId;
    public ExportOrderListRequest withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}