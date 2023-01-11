package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AirtravelCoordinatesRequest {
    public String serverURL;
    public AirtravelCoordinatesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public AirtravelCoordinatesHeaders headers;
    public AirtravelCoordinatesRequest withHeaders(AirtravelCoordinatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public AirtravelCoordinatesRequestBody request;
    public AirtravelCoordinatesRequest withRequest(AirtravelCoordinatesRequestBody request) {
        this.request = request;
        return this;
    }
}