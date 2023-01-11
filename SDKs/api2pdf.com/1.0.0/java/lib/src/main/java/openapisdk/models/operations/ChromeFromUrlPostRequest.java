package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromeFromUrlPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChromeUrlToPdfRequest request;
    public ChromeFromUrlPostRequest withRequest(openapisdk.models.shared.ChromeUrlToPdfRequest request) {
        this.request = request;
        return this;
    }
}