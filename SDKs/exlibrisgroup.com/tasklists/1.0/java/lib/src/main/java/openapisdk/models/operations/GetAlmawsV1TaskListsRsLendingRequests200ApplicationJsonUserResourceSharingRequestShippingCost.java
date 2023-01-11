package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost {
    @JsonProperty("currency")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency currency;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost withCurrency(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("sum")
    public Double sum;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost withSum(Double sum) {
        this.sum = sum;
        return this;
    }
}