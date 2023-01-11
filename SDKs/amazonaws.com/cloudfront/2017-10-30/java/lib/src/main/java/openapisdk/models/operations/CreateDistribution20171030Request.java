package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistribution20171030Request {
    public CreateDistribution20171030Headers headers;
    public CreateDistribution20171030Request withHeaders(CreateDistribution20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistribution20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}