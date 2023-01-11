package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContainsPiiEntitiesRequest {
    public ContainsPiiEntitiesHeaders headers;
    public ContainsPiiEntitiesRequest withHeaders(ContainsPiiEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContainsPiiEntitiesRequest request;
    public ContainsPiiEntitiesRequest withRequest(openapisdk.models.shared.ContainsPiiEntitiesRequest request) {
        this.request = request;
        return this;
    }
}