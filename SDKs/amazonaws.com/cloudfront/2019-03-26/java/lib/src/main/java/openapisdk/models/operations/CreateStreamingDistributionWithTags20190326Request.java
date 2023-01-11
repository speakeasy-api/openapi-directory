package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20190326Request {
    public CreateStreamingDistributionWithTags20190326QueryParams queryParams;
    public CreateStreamingDistributionWithTags20190326Request withQueryParams(CreateStreamingDistributionWithTags20190326QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateStreamingDistributionWithTags20190326Headers headers;
    public CreateStreamingDistributionWithTags20190326Request withHeaders(CreateStreamingDistributionWithTags20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistributionWithTags20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}