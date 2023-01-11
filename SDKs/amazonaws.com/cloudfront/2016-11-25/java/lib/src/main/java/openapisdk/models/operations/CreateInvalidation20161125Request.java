package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInvalidation20161125Request {
    public CreateInvalidation20161125PathParams pathParams;
    public CreateInvalidation20161125Request withPathParams(CreateInvalidation20161125PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateInvalidation20161125Headers headers;
    public CreateInvalidation20161125Request withHeaders(CreateInvalidation20161125Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateInvalidation20161125Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}