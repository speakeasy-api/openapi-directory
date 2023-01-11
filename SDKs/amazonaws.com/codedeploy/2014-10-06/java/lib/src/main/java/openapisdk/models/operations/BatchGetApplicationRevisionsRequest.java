package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetApplicationRevisionsRequest {
    public BatchGetApplicationRevisionsHeaders headers;
    public BatchGetApplicationRevisionsRequest withHeaders(BatchGetApplicationRevisionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetApplicationRevisionsInput request;
    public BatchGetApplicationRevisionsRequest withRequest(openapisdk.models.shared.BatchGetApplicationRevisionsInput request) {
        this.request = request;
        return this;
    }
}