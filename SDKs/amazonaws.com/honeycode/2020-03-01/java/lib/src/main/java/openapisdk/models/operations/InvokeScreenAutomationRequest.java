package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeScreenAutomationRequest {
    public InvokeScreenAutomationPathParams pathParams;
    public InvokeScreenAutomationRequest withPathParams(InvokeScreenAutomationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InvokeScreenAutomationHeaders headers;
    public InvokeScreenAutomationRequest withHeaders(InvokeScreenAutomationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InvokeScreenAutomationRequestBody request;
    public InvokeScreenAutomationRequest withRequest(InvokeScreenAutomationRequestBody request) {
        this.request = request;
        return this;
    }
}