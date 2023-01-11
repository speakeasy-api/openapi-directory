package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCloudFrontOriginAccessIdentity20190326Request {
    public CreateCloudFrontOriginAccessIdentity20190326Headers headers;
    public CreateCloudFrontOriginAccessIdentity20190326Request withHeaders(CreateCloudFrontOriginAccessIdentity20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateCloudFrontOriginAccessIdentity20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}