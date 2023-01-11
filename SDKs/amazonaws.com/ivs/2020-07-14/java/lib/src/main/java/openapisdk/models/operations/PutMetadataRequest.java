package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMetadataRequest {
    public PutMetadataHeaders headers;
    public PutMetadataRequest withHeaders(PutMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutMetadataRequestBody request;
    public PutMetadataRequest withRequest(PutMetadataRequestBody request) {
        this.request = request;
        return this;
    }
}