package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderOperationResponse
 * The response given by the batch operation for an order
**/
public class OrderOperationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BeezUpCommonUserErrorMessage[] errors;
    public OrderOperationResponse withErrors(BeezUpCommonUserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("order")
    public OrderIdentifier order;
    public OrderOperationResponse withOrder(OrderIdentifier order) {
        this.order = order;
        return this;
    }
    @JsonProperty("status")
    public Long status;
    public OrderOperationResponse withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public OrderOperationResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}