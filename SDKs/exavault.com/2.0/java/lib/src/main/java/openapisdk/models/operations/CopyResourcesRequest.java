package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyResourcesRequest {
    public CopyResourcesHeaders headers;
    public CopyResourcesRequest withHeaders(CopyResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CopyResourcesCopyResourcesRequestBody request;
    public CopyResourcesRequest withRequest(CopyResourcesCopyResourcesRequestBody request) {
        this.request = request;
        return this;
    }
}