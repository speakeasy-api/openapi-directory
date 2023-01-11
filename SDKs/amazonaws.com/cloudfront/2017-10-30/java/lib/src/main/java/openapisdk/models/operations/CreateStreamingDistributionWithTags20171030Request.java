package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20171030Request {
    public CreateStreamingDistributionWithTags20171030QueryParams queryParams;
    public CreateStreamingDistributionWithTags20171030Request withQueryParams(CreateStreamingDistributionWithTags20171030QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateStreamingDistributionWithTags20171030Headers headers;
    public CreateStreamingDistributionWithTags20171030Request withHeaders(CreateStreamingDistributionWithTags20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistributionWithTags20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}