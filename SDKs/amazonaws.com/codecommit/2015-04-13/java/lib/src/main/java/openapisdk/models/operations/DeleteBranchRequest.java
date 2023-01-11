package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBranchRequest {
    public DeleteBranchHeaders headers;
    public DeleteBranchRequest withHeaders(DeleteBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBranchInput request;
    public DeleteBranchRequest withRequest(openapisdk.models.shared.DeleteBranchInput request) {
        this.request = request;
        return this;
    }
}