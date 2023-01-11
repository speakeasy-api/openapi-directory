package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBranchRequest {
    public GetBranchHeaders headers;
    public GetBranchRequest withHeaders(GetBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBranchInput request;
    public GetBranchRequest withRequest(openapisdk.models.shared.GetBranchInput request) {
        this.request = request;
        return this;
    }
}