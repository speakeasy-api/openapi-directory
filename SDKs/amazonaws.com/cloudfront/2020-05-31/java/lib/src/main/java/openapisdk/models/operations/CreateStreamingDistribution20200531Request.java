package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistribution20200531Request {
    public CreateStreamingDistribution20200531Headers headers;
    public CreateStreamingDistribution20200531Request withHeaders(CreateStreamingDistribution20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistribution20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}