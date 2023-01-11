package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistribution20170325Request {
    public CreateDistribution20170325Headers headers;
    public CreateDistribution20170325Request withHeaders(CreateDistribution20170325Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistribution20170325Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}