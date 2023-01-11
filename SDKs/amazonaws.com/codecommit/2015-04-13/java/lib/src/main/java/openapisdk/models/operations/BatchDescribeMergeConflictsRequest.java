package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDescribeMergeConflictsRequest {
    public BatchDescribeMergeConflictsHeaders headers;
    public BatchDescribeMergeConflictsRequest withHeaders(BatchDescribeMergeConflictsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDescribeMergeConflictsInput request;
    public BatchDescribeMergeConflictsRequest withRequest(openapisdk.models.shared.BatchDescribeMergeConflictsInput request) {
        this.request = request;
        return this;
    }
}