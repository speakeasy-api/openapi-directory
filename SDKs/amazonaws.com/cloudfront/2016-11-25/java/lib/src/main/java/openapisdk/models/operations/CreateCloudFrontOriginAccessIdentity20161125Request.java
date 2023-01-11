package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCloudFrontOriginAccessIdentity20161125Request {
    public CreateCloudFrontOriginAccessIdentity20161125Headers headers;
    public CreateCloudFrontOriginAccessIdentity20161125Request withHeaders(CreateCloudFrontOriginAccessIdentity20161125Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateCloudFrontOriginAccessIdentity20161125Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}