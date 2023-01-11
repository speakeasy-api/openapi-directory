package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConditionalForwarderRequest {
    public UpdateConditionalForwarderHeaders headers;
    public UpdateConditionalForwarderRequest withHeaders(UpdateConditionalForwarderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateConditionalForwarderRequest request;
    public UpdateConditionalForwarderRequest withRequest(openapisdk.models.shared.UpdateConditionalForwarderRequest request) {
        this.request = request;
        return this;
    }
}