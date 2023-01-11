package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReserveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReserveRequestBody request;
    public ReserveRequest withRequest(ReserveRequestBody request) {
        this.request = request;
        return this;
    }
}