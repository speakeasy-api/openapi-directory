package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDedicatedIpInPoolRequest {
    public PutDedicatedIpInPoolPathParams pathParams;
    public PutDedicatedIpInPoolRequest withPathParams(PutDedicatedIpInPoolPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutDedicatedIpInPoolHeaders headers;
    public PutDedicatedIpInPoolRequest withHeaders(PutDedicatedIpInPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutDedicatedIpInPoolRequestBody request;
    public PutDedicatedIpInPoolRequest withRequest(PutDedicatedIpInPoolRequestBody request) {
        this.request = request;
        return this;
    }
}