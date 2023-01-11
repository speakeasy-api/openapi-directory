package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfIssuersIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public GetListOfIssuersIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetListOfIssuersIdSecurity security;
    public GetListOfIssuersIdRequest withSecurity(GetListOfIssuersIdSecurity security) {
        this.security = security;
        return this;
    }
}