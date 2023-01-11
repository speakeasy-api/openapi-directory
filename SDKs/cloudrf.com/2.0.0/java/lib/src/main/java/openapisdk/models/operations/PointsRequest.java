package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PointsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PointsRequestBody request;
    public PointsRequest withRequest(PointsRequestBody request) {
        this.request = request;
        return this;
    }
    public PointsSecurity security;
    public PointsRequest withSecurity(PointsSecurity security) {
        this.security = security;
        return this;
    }
}