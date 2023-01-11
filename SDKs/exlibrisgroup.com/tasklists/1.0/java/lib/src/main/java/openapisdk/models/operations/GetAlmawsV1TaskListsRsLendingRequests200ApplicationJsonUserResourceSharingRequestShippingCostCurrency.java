package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency withValue(String value) {
        this.value = value;
        return this;
    }
}