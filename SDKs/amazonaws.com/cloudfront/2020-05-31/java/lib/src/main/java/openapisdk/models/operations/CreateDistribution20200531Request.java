package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistribution20200531Request {
    public CreateDistribution20200531Headers headers;
    public CreateDistribution20200531Request withHeaders(CreateDistribution20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistribution20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}