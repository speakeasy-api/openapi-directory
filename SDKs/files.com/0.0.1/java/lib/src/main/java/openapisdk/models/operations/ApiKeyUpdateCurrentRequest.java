package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeyUpdateCurrentRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ApiKeyUpdateCurrentRequestBody request;
    public ApiKeyUpdateCurrentRequest withRequest(ApiKeyUpdateCurrentRequestBody request) {
        this.request = request;
        return this;
    }
}