package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateAppSpecRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ValidateAppSpecRequestBody request;
    public ValidateAppSpecRequest withRequest(ValidateAppSpecRequestBody request) {
        this.request = request;
        return this;
    }
}