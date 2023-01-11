package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUpdatedImageRequest {
    public CreateUpdatedImageHeaders headers;
    public CreateUpdatedImageRequest withHeaders(CreateUpdatedImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUpdatedImageRequest request;
    public CreateUpdatedImageRequest withRequest(openapisdk.models.shared.CreateUpdatedImageRequest request) {
        this.request = request;
        return this;
    }
}