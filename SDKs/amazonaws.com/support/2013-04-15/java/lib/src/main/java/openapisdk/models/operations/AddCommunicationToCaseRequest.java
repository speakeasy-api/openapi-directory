package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCommunicationToCaseRequest {
    public AddCommunicationToCaseHeaders headers;
    public AddCommunicationToCaseRequest withHeaders(AddCommunicationToCaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddCommunicationToCaseRequest request;
    public AddCommunicationToCaseRequest withRequest(openapisdk.models.shared.AddCommunicationToCaseRequest request) {
        this.request = request;
        return this;
    }
}