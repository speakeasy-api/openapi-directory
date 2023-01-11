package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCloudFrontOriginAccessIdentity20171030Request {
    public UpdateCloudFrontOriginAccessIdentity20171030PathParams pathParams;
    public UpdateCloudFrontOriginAccessIdentity20171030Request withPathParams(UpdateCloudFrontOriginAccessIdentity20171030PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCloudFrontOriginAccessIdentity20171030Headers headers;
    public UpdateCloudFrontOriginAccessIdentity20171030Request withHeaders(UpdateCloudFrontOriginAccessIdentity20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateCloudFrontOriginAccessIdentity20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}