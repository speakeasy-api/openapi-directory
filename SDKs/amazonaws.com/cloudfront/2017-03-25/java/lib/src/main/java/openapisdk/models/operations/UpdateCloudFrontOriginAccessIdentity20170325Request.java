package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCloudFrontOriginAccessIdentity20170325Request {
    public UpdateCloudFrontOriginAccessIdentity20170325PathParams pathParams;
    public UpdateCloudFrontOriginAccessIdentity20170325Request withPathParams(UpdateCloudFrontOriginAccessIdentity20170325PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCloudFrontOriginAccessIdentity20170325Headers headers;
    public UpdateCloudFrontOriginAccessIdentity20170325Request withHeaders(UpdateCloudFrontOriginAccessIdentity20170325Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateCloudFrontOriginAccessIdentity20170325Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}