package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKeyGroup20200531Request {
    public UpdateKeyGroup20200531PathParams pathParams;
    public UpdateKeyGroup20200531Request withPathParams(UpdateKeyGroup20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateKeyGroup20200531Headers headers;
    public UpdateKeyGroup20200531Request withHeaders(UpdateKeyGroup20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateKeyGroup20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}