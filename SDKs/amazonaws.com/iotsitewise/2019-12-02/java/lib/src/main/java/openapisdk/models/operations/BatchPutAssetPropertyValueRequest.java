package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchPutAssetPropertyValueRequest {
    public BatchPutAssetPropertyValueHeaders headers;
    public BatchPutAssetPropertyValueRequest withHeaders(BatchPutAssetPropertyValueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchPutAssetPropertyValueRequestBody request;
    public BatchPutAssetPropertyValueRequest withRequest(BatchPutAssetPropertyValueRequestBody request) {
        this.request = request;
        return this;
    }
}