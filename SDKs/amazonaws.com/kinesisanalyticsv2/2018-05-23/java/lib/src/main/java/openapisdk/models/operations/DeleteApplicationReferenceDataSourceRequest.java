package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationReferenceDataSourceRequest {
    public DeleteApplicationReferenceDataSourceHeaders headers;
    public DeleteApplicationReferenceDataSourceRequest withHeaders(DeleteApplicationReferenceDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationReferenceDataSourceRequest request;
    public DeleteApplicationReferenceDataSourceRequest withRequest(openapisdk.models.shared.DeleteApplicationReferenceDataSourceRequest request) {
        this.request = request;
        return this;
    }
}