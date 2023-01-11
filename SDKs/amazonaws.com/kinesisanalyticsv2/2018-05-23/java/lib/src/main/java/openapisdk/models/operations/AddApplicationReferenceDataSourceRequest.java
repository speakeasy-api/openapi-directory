package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationReferenceDataSourceRequest {
    public AddApplicationReferenceDataSourceHeaders headers;
    public AddApplicationReferenceDataSourceRequest withHeaders(AddApplicationReferenceDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddApplicationReferenceDataSourceRequest request;
    public AddApplicationReferenceDataSourceRequest withRequest(openapisdk.models.shared.AddApplicationReferenceDataSourceRequest request) {
        this.request = request;
        return this;
    }
}