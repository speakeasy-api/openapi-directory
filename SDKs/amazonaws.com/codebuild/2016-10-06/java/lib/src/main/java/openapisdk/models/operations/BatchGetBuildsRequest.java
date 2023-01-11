package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetBuildsRequest {
    public BatchGetBuildsHeaders headers;
    public BatchGetBuildsRequest withHeaders(BatchGetBuildsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetBuildsInput request;
    public BatchGetBuildsRequest withRequest(openapisdk.models.shared.BatchGetBuildsInput request) {
        this.request = request;
        return this;
    }
}