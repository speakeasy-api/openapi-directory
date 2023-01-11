package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMergeConflictsRequest {
    public DescribeMergeConflictsQueryParams queryParams;
    public DescribeMergeConflictsRequest withQueryParams(DescribeMergeConflictsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeMergeConflictsHeaders headers;
    public DescribeMergeConflictsRequest withHeaders(DescribeMergeConflictsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMergeConflictsInput request;
    public DescribeMergeConflictsRequest withRequest(openapisdk.models.shared.DescribeMergeConflictsInput request) {
        this.request = request;
        return this;
    }
}