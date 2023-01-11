package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MiipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MiipcRequestBody request;
    public MiipcRequest withRequest(MiipcRequestBody request) {
        this.request = request;
        return this;
    }
    public MiipcSecurity security;
    public MiipcRequest withSecurity(MiipcSecurity security) {
        this.security = security;
        return this;
    }
}