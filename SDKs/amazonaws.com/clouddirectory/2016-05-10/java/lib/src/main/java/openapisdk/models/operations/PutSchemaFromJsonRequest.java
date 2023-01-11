package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSchemaFromJsonRequest {
    public PutSchemaFromJsonHeaders headers;
    public PutSchemaFromJsonRequest withHeaders(PutSchemaFromJsonHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutSchemaFromJsonRequestBody request;
    public PutSchemaFromJsonRequest withRequest(PutSchemaFromJsonRequestBody request) {
        this.request = request;
        return this;
    }
}