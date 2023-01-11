package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInvalidation20200531Request {
    public CreateInvalidation20200531PathParams pathParams;
    public CreateInvalidation20200531Request withPathParams(CreateInvalidation20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateInvalidation20200531Headers headers;
    public CreateInvalidation20200531Request withHeaders(CreateInvalidation20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateInvalidation20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}