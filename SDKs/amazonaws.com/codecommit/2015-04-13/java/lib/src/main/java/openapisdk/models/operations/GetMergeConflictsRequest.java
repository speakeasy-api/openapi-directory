package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMergeConflictsRequest {
    public GetMergeConflictsQueryParams queryParams;
    public GetMergeConflictsRequest withQueryParams(GetMergeConflictsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMergeConflictsHeaders headers;
    public GetMergeConflictsRequest withHeaders(GetMergeConflictsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMergeConflictsInput request;
    public GetMergeConflictsRequest withRequest(openapisdk.models.shared.GetMergeConflictsInput request) {
        this.request = request;
        return this;
    }
}