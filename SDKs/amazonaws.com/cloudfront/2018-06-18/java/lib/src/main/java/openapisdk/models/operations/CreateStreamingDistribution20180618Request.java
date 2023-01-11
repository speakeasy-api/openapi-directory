package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistribution20180618Request {
    public CreateStreamingDistribution20180618Headers headers;
    public CreateStreamingDistribution20180618Request withHeaders(CreateStreamingDistribution20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistribution20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}