package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCuratedEnvironmentImagesRequest {
    public ListCuratedEnvironmentImagesHeaders headers;
    public ListCuratedEnvironmentImagesRequest withHeaders(ListCuratedEnvironmentImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ListCuratedEnvironmentImagesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}