package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppliedSchemaVersionRequest {
    public GetAppliedSchemaVersionHeaders headers;
    public GetAppliedSchemaVersionRequest withHeaders(GetAppliedSchemaVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetAppliedSchemaVersionRequestBody request;
    public GetAppliedSchemaVersionRequest withRequest(GetAppliedSchemaVersionRequestBody request) {
        this.request = request;
        return this;
    }
}