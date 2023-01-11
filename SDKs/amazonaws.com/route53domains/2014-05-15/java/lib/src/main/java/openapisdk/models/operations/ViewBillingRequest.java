package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewBillingRequest {
    public ViewBillingHeaders headers;
    public ViewBillingRequest withHeaders(ViewBillingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ViewBillingRequest request;
    public ViewBillingRequest withRequest(openapisdk.models.shared.ViewBillingRequest request) {
        this.request = request;
        return this;
    }
}