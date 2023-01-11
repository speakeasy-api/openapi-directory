package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateOrUpdateAnnotationsRequest {
    public BulkCreateOrUpdateAnnotationsPathParams pathParams;
    public BulkCreateOrUpdateAnnotationsRequest withPathParams(BulkCreateOrUpdateAnnotationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object>[] request;
    public BulkCreateOrUpdateAnnotationsRequest withRequest(java.util.Map<String, Object>[] request) {
        this.request = request;
        return this;
    }
}