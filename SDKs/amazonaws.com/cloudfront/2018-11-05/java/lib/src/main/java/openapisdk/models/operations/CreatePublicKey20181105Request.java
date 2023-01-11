package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePublicKey20181105Request {
    public CreatePublicKey20181105Headers headers;
    public CreatePublicKey20181105Request withHeaders(CreatePublicKey20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreatePublicKey20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}