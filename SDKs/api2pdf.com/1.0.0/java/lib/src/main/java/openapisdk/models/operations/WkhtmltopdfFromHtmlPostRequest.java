package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WkhtmltopdfFromHtmlPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WkHtmlToPdfHtmlToPdfRequest request;
    public WkhtmltopdfFromHtmlPostRequest withRequest(openapisdk.models.shared.WkHtmlToPdfHtmlToPdfRequest request) {
        this.request = request;
        return this;
    }
}