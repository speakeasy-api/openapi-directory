package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EcommerceDeliveryRequest {
    public String serverURL;
    public EcommerceDeliveryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public EcommerceDeliveryHeaders headers;
    public EcommerceDeliveryRequest withHeaders(EcommerceDeliveryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public EcommerceDeliveryRequestBody request;
    public EcommerceDeliveryRequest withRequest(EcommerceDeliveryRequestBody request) {
        this.request = request;
        return this;
    }
}