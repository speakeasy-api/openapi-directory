package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteBuildsRequest {
    public BatchDeleteBuildsHeaders headers;
    public BatchDeleteBuildsRequest withHeaders(BatchDeleteBuildsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteBuildsInput request;
    public BatchDeleteBuildsRequest withRequest(openapisdk.models.shared.BatchDeleteBuildsInput request) {
        this.request = request;
        return this;
    }
}