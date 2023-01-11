package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConditionalForwarderRequest {
    public DeleteConditionalForwarderHeaders headers;
    public DeleteConditionalForwarderRequest withHeaders(DeleteConditionalForwarderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConditionalForwarderRequest request;
    public DeleteConditionalForwarderRequest withRequest(openapisdk.models.shared.DeleteConditionalForwarderRequest request) {
        this.request = request;
        return this;
    }
}