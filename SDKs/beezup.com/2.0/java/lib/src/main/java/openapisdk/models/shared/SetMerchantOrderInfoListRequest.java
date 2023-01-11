package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetMerchantOrderInfoListRequest {
    @JsonProperty("order_MerchantECommerceSoftwareName")
    public String orderMerchantECommerceSoftwareName;
    public SetMerchantOrderInfoListRequest withOrderMerchantECommerceSoftwareName(String orderMerchantECommerceSoftwareName) {
        this.orderMerchantECommerceSoftwareName = orderMerchantECommerceSoftwareName;
        return this;
    }
    @JsonProperty("order_MerchantECommerceSoftwareVersion")
    public String orderMerchantECommerceSoftwareVersion;
    public SetMerchantOrderInfoListRequest withOrderMerchantECommerceSoftwareVersion(String orderMerchantECommerceSoftwareVersion) {
        this.orderMerchantECommerceSoftwareVersion = orderMerchantECommerceSoftwareVersion;
        return this;
    }
    @JsonProperty("orders")
    public SetMerchantOrderInfoListRequestItem[] orders;
    public SetMerchantOrderInfoListRequest withOrders(SetMerchantOrderInfoListRequestItem[] orders) {
        this.orders = orders;
        return this;
    }
}