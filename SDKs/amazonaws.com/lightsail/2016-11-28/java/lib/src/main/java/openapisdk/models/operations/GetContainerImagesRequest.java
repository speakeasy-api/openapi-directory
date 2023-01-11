package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerImagesRequest {
    public GetContainerImagesHeaders headers;
    public GetContainerImagesRequest withHeaders(GetContainerImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContainerImagesRequest request;
    public GetContainerImagesRequest withRequest(openapisdk.models.shared.GetContainerImagesRequest request) {
        this.request = request;
        return this;
    }
}