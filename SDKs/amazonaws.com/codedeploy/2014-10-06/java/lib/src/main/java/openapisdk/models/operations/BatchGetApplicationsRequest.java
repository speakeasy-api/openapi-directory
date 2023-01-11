package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetApplicationsRequest {
    public BatchGetApplicationsHeaders headers;
    public BatchGetApplicationsRequest withHeaders(BatchGetApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetApplicationsInput request;
    public BatchGetApplicationsRequest withRequest(openapisdk.models.shared.BatchGetApplicationsInput request) {
        this.request = request;
        return this;
    }
}