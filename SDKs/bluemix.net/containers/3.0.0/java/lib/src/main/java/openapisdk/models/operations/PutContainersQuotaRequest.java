package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutContainersQuotaRequest {
    public PutContainersQuotaHeaders headers;
    public PutContainersQuotaRequest withHeaders(PutContainersQuotaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PutContainersQuotaRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}