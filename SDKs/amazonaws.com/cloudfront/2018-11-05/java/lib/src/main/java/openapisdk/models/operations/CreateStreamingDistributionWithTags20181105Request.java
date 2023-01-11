package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20181105Request {
    public CreateStreamingDistributionWithTags20181105QueryParams queryParams;
    public CreateStreamingDistributionWithTags20181105Request withQueryParams(CreateStreamingDistributionWithTags20181105QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateStreamingDistributionWithTags20181105Headers headers;
    public CreateStreamingDistributionWithTags20181105Request withHeaders(CreateStreamingDistributionWithTags20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistributionWithTags20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}