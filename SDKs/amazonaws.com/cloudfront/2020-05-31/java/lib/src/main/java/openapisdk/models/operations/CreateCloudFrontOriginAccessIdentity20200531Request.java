package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCloudFrontOriginAccessIdentity20200531Request {
    public CreateCloudFrontOriginAccessIdentity20200531Headers headers;
    public CreateCloudFrontOriginAccessIdentity20200531Request withHeaders(CreateCloudFrontOriginAccessIdentity20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateCloudFrontOriginAccessIdentity20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}