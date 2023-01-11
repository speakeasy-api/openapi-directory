package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCompatibleImagesRequest {
    public ListCompatibleImagesHeaders headers;
    public ListCompatibleImagesRequest withHeaders(ListCompatibleImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCompatibleImagesRequest request;
    public ListCompatibleImagesRequest withRequest(openapisdk.models.shared.ListCompatibleImagesRequest request) {
        this.request = request;
        return this;
    }
}