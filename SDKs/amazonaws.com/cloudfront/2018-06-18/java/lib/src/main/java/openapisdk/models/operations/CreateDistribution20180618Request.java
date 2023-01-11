package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistribution20180618Request {
    public CreateDistribution20180618Headers headers;
    public CreateDistribution20180618Request withHeaders(CreateDistribution20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistribution20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}