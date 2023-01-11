package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFunction20200531Request {
    public CreateFunction20200531Headers headers;
    public CreateFunction20200531Request withHeaders(CreateFunction20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFunction20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}