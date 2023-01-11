package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistribution20161125Request {
    public CreateDistribution20161125Headers headers;
    public CreateDistribution20161125Request withHeaders(CreateDistribution20161125Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistribution20161125Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}