package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBranchRequest {
    public CreateBranchHeaders headers;
    public CreateBranchRequest withHeaders(CreateBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBranchInput request;
    public CreateBranchRequest withRequest(openapisdk.models.shared.CreateBranchInput request) {
        this.request = request;
        return this;
    }
}