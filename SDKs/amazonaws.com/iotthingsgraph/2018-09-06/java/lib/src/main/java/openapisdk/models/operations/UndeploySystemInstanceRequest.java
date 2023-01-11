package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UndeploySystemInstanceRequest {
    public UndeploySystemInstanceHeaders headers;
    public UndeploySystemInstanceRequest withHeaders(UndeploySystemInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeploySystemInstanceRequest request;
    public UndeploySystemInstanceRequest withRequest(openapisdk.models.shared.UndeploySystemInstanceRequest request) {
        this.request = request;
        return this;
    }
}