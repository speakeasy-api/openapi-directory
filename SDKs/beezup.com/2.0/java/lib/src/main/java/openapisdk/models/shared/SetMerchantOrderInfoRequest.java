package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetMerchantOrderInfoRequest {
    @JsonProperty("order_MerchantECommerceSoftwareName")
    public String orderMerchantECommerceSoftwareName;
    public SetMerchantOrderInfoRequest withOrderMerchantECommerceSoftwareName(String orderMerchantECommerceSoftwareName) {
        this.orderMerchantECommerceSoftwareName = orderMerchantECommerceSoftwareName;
        return this;
    }
    @JsonProperty("order_MerchantECommerceSoftwareVersion")
    public String orderMerchantECommerceSoftwareVersion;
    public SetMerchantOrderInfoRequest withOrderMerchantECommerceSoftwareVersion(String orderMerchantECommerceSoftwareVersion) {
        this.orderMerchantECommerceSoftwareVersion = orderMerchantECommerceSoftwareVersion;
        return this;
    }
    @JsonProperty("order_MerchantOrderId")
    public String orderMerchantOrderId;
    public SetMerchantOrderInfoRequest withOrderMerchantOrderId(String orderMerchantOrderId) {
        this.orderMerchantOrderId = orderMerchantOrderId;
        return this;
    }
}