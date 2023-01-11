package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConditionalForwarderRequest {
    public CreateConditionalForwarderHeaders headers;
    public CreateConditionalForwarderRequest withHeaders(CreateConditionalForwarderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateConditionalForwarderRequest request;
    public CreateConditionalForwarderRequest withRequest(openapisdk.models.shared.CreateConditionalForwarderRequest request) {
        this.request = request;
        return this;
    }
}