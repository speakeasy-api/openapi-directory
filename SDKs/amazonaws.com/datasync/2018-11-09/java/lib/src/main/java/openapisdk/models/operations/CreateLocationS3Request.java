package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationS3Request {
    public CreateLocationS3Headers headers;
    public CreateLocationS3Request withHeaders(CreateLocationS3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLocationS3Request request;
    public CreateLocationS3Request withRequest(openapisdk.models.shared.CreateLocationS3Request request) {
        this.request = request;
        return this;
    }
}