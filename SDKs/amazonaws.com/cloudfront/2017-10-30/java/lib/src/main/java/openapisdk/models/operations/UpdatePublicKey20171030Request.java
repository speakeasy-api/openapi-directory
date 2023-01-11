package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePublicKey20171030Request {
    public UpdatePublicKey20171030PathParams pathParams;
    public UpdatePublicKey20171030Request withPathParams(UpdatePublicKey20171030PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePublicKey20171030Headers headers;
    public UpdatePublicKey20171030Request withHeaders(UpdatePublicKey20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdatePublicKey20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}