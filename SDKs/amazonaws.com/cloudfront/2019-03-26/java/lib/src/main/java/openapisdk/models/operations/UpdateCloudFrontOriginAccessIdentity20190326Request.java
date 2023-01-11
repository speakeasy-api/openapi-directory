package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCloudFrontOriginAccessIdentity20190326Request {
    public UpdateCloudFrontOriginAccessIdentity20190326PathParams pathParams;
    public UpdateCloudFrontOriginAccessIdentity20190326Request withPathParams(UpdateCloudFrontOriginAccessIdentity20190326PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCloudFrontOriginAccessIdentity20190326Headers headers;
    public UpdateCloudFrontOriginAccessIdentity20190326Request withHeaders(UpdateCloudFrontOriginAccessIdentity20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateCloudFrontOriginAccessIdentity20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}