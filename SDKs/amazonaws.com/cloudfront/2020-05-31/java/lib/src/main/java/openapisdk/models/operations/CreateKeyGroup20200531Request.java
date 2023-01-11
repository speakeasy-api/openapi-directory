package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateKeyGroup20200531Request {
    public CreateKeyGroup20200531Headers headers;
    public CreateKeyGroup20200531Request withHeaders(CreateKeyGroup20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateKeyGroup20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}