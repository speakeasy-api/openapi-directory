package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEntitiesDetectionV2JobsRequest {
    public ListEntitiesDetectionV2JobsHeaders headers;
    public ListEntitiesDetectionV2JobsRequest withHeaders(ListEntitiesDetectionV2JobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEntitiesDetectionV2JobsRequest request;
    public ListEntitiesDetectionV2JobsRequest withRequest(openapisdk.models.shared.ListEntitiesDetectionV2JobsRequest request) {
        this.request = request;
        return this;
    }
}