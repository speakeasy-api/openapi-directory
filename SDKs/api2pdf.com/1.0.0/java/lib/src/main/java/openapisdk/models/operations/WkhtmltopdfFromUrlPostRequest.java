package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WkhtmltopdfFromUrlPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WkHtmlToPdfUrlToPdfRequest request;
    public WkhtmltopdfFromUrlPostRequest withRequest(openapisdk.models.shared.WkHtmlToPdfUrlToPdfRequest request) {
        this.request = request;
        return this;
    }
}