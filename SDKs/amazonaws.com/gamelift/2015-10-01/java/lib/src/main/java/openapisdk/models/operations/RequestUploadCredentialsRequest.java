package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestUploadCredentialsRequest {
    public RequestUploadCredentialsHeaders headers;
    public RequestUploadCredentialsRequest withHeaders(RequestUploadCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequestUploadCredentialsInput request;
    public RequestUploadCredentialsRequest withRequest(openapisdk.models.shared.RequestUploadCredentialsInput request) {
        this.request = request;
        return this;
    }
}