package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePublicKey20200531Request {
    public UpdatePublicKey20200531PathParams pathParams;
    public UpdatePublicKey20200531Request withPathParams(UpdatePublicKey20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePublicKey20200531Headers headers;
    public UpdatePublicKey20200531Request withHeaders(UpdatePublicKey20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdatePublicKey20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}