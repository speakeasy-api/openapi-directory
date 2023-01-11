package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateDataShareConsumerRequest {
    public PostDisassociateDataShareConsumerQueryParams queryParams;
    public PostDisassociateDataShareConsumerRequest withQueryParams(PostDisassociateDataShareConsumerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateDataShareConsumerHeaders headers;
    public PostDisassociateDataShareConsumerRequest withHeaders(PostDisassociateDataShareConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateDataShareConsumerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}