package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromeFromHtmlPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChromeHtmlToPdfRequest request;
    public ChromeFromHtmlPostRequest withRequest(openapisdk.models.shared.ChromeHtmlToPdfRequest request) {
        this.request = request;
        return this;
    }
}