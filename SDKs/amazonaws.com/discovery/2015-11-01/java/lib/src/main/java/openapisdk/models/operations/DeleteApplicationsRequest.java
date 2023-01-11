package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationsRequest {
    public DeleteApplicationsHeaders headers;
    public DeleteApplicationsRequest withHeaders(DeleteApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationsRequest request;
    public DeleteApplicationsRequest withRequest(openapisdk.models.shared.DeleteApplicationsRequest request) {
        this.request = request;
        return this;
    }
}