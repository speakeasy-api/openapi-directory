package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost {
    @JsonProperty("currency")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency currency;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost withCurrency(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("sum")
    public Double sum;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost withSum(Double sum) {
        this.sum = sum;
        return this;
    }
}