package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateDataShareConsumerRequest {
    public PostAssociateDataShareConsumerQueryParams queryParams;
    public PostAssociateDataShareConsumerRequest withQueryParams(PostAssociateDataShareConsumerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateDataShareConsumerHeaders headers;
    public PostAssociateDataShareConsumerRequest withHeaders(PostAssociateDataShareConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateDataShareConsumerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}