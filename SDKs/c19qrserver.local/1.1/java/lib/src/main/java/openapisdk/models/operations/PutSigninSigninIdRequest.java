package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSigninSigninIdRequest {
    public PutSigninSigninIdPathParams pathParams;
    public PutSigninSigninIdRequest withPathParams(PutSigninSigninIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Signin request;
    public PutSigninSigninIdRequest withRequest(openapisdk.models.shared.Signin request) {
        this.request = request;
        return this;
    }
}