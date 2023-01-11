package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOriginRequestPolicy20200531Request {
    public CreateOriginRequestPolicy20200531Headers headers;
    public CreateOriginRequestPolicy20200531Request withHeaders(CreateOriginRequestPolicy20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateOriginRequestPolicy20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}