package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OrderIndexLovLinks
 * Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
**/
public class OrderIndexLovLinks {
    @JsonProperty("orderChangeBusinessOperationType")
    public BeezUpCommonLovLink3 orderChangeBusinessOperationType;
    public OrderIndexLovLinks withOrderChangeBusinessOperationType(BeezUpCommonLovLink3 orderChangeBusinessOperationType) {
        this.orderChangeBusinessOperationType = orderChangeBusinessOperationType;
        return this;
    }
    @JsonProperty("orderProperty")
    public BeezUpCommonLovLink3 orderProperty;
    public OrderIndexLovLinks withOrderProperty(BeezUpCommonLovLink3 orderProperty) {
        this.orderProperty = orderProperty;
        return this;
    }
    @JsonProperty("orderPropertyPosted")
    public BeezUpCommonLovLink3 orderPropertyPosted;
    public OrderIndexLovLinks withOrderPropertyPosted(BeezUpCommonLovLink3 orderPropertyPosted) {
        this.orderPropertyPosted = orderPropertyPosted;
        return this;
    }
    @JsonProperty("orderState")
    public BeezUpCommonLovLink3 orderState;
    public OrderIndexLovLinks withOrderState(BeezUpCommonLovLink3 orderState) {
        this.orderState = orderState;
        return this;
    }
}