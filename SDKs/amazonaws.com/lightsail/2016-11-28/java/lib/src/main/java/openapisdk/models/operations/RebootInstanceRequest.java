package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootInstanceRequest {
    public RebootInstanceHeaders headers;
    public RebootInstanceRequest withHeaders(RebootInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebootInstanceRequest request;
    public RebootInstanceRequest withRequest(openapisdk.models.shared.RebootInstanceRequest request) {
        this.request = request;
        return this;
    }
}