package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PathRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PathRequestBody request;
    public PathRequest withRequest(PathRequestBody request) {
        this.request = request;
        return this;
    }
    public PathSecurity security;
    public PathRequest withSecurity(PathSecurity security) {
        this.security = security;
        return this;
    }
}