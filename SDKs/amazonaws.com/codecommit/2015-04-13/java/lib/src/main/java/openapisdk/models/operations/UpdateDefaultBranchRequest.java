package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDefaultBranchRequest {
    public UpdateDefaultBranchHeaders headers;
    public UpdateDefaultBranchRequest withHeaders(UpdateDefaultBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDefaultBranchInput request;
    public UpdateDefaultBranchRequest withRequest(openapisdk.models.shared.UpdateDefaultBranchInput request) {
        this.request = request;
        return this;
    }
}