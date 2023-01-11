package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistribution20171030Request {
    public CreateStreamingDistribution20171030Headers headers;
    public CreateStreamingDistribution20171030Request withHeaders(CreateStreamingDistribution20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistribution20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}