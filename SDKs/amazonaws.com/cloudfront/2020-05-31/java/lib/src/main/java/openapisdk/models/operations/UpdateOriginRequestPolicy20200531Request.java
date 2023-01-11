package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOriginRequestPolicy20200531Request {
    public UpdateOriginRequestPolicy20200531PathParams pathParams;
    public UpdateOriginRequestPolicy20200531Request withPathParams(UpdateOriginRequestPolicy20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateOriginRequestPolicy20200531Headers headers;
    public UpdateOriginRequestPolicy20200531Request withHeaders(UpdateOriginRequestPolicy20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateOriginRequestPolicy20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}