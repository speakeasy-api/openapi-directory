package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootNodeRequest {
    public RebootNodeHeaders headers;
    public RebootNodeRequest withHeaders(RebootNodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebootNodeRequest request;
    public RebootNodeRequest withRequest(openapisdk.models.shared.RebootNodeRequest request) {
        this.request = request;
        return this;
    }
}