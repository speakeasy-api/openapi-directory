package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetShippingLabelRequest {
    public PostGetShippingLabelQueryParams queryParams;
    public PostGetShippingLabelRequest withQueryParams(PostGetShippingLabelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetShippingLabelRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}