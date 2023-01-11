package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistribution20181105Request {
    public CreateStreamingDistribution20181105Headers headers;
    public CreateStreamingDistribution20181105Request withHeaders(CreateStreamingDistribution20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistribution20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}