package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCachePolicy20200531Request {
    public CreateCachePolicy20200531Headers headers;
    public CreateCachePolicy20200531Request withHeaders(CreateCachePolicy20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateCachePolicy20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}