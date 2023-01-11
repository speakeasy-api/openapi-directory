package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutConfigurationSetDeliveryOptionsRequest {
    public PostPutConfigurationSetDeliveryOptionsQueryParams queryParams;
    public PostPutConfigurationSetDeliveryOptionsRequest withQueryParams(PostPutConfigurationSetDeliveryOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutConfigurationSetDeliveryOptionsHeaders headers;
    public PostPutConfigurationSetDeliveryOptionsRequest withHeaders(PostPutConfigurationSetDeliveryOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutConfigurationSetDeliveryOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}