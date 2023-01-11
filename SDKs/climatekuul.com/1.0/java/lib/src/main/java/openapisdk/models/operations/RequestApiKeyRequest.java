package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestApiKeyRequest {
    public String serverURL;
    public RequestApiKeyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public RequestApiKeyRequestBody request;
    public RequestApiKeyRequest withRequest(RequestApiKeyRequestBody request) {
        this.request = request;
        return this;
    }
}