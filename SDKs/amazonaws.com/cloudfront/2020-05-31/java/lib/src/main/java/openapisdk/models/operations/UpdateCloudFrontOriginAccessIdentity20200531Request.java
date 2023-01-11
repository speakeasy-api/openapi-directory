package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCloudFrontOriginAccessIdentity20200531Request {
    public UpdateCloudFrontOriginAccessIdentity20200531PathParams pathParams;
    public UpdateCloudFrontOriginAccessIdentity20200531Request withPathParams(UpdateCloudFrontOriginAccessIdentity20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCloudFrontOriginAccessIdentity20200531Headers headers;
    public UpdateCloudFrontOriginAccessIdentity20200531Request withHeaders(UpdateCloudFrontOriginAccessIdentity20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateCloudFrontOriginAccessIdentity20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}