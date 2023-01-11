package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOperationsForConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionIdRequestBody request;
    public ListOperationsForConnectionRequest withRequest(openapisdk.models.shared.ConnectionIdRequestBody request) {
        this.request = request;
        return this;
    }
}