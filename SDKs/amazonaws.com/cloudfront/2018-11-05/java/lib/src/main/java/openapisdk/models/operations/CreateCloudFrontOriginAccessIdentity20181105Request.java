package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCloudFrontOriginAccessIdentity20181105Request {
    public CreateCloudFrontOriginAccessIdentity20181105Headers headers;
    public CreateCloudFrontOriginAccessIdentity20181105Request withHeaders(CreateCloudFrontOriginAccessIdentity20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateCloudFrontOriginAccessIdentity20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}