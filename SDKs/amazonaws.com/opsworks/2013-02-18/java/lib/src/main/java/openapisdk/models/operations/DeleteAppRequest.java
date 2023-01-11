package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppRequest {
    public DeleteAppHeaders headers;
    public DeleteAppRequest withHeaders(DeleteAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAppRequest request;
    public DeleteAppRequest withRequest(openapisdk.models.shared.DeleteAppRequest request) {
        this.request = request;
        return this;
    }
}