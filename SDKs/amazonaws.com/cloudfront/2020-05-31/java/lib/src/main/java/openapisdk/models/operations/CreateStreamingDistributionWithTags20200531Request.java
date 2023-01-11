package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20200531Request {
    public CreateStreamingDistributionWithTags20200531QueryParams queryParams;
    public CreateStreamingDistributionWithTags20200531Request withQueryParams(CreateStreamingDistributionWithTags20200531QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateStreamingDistributionWithTags20200531Headers headers;
    public CreateStreamingDistributionWithTags20200531Request withHeaders(CreateStreamingDistributionWithTags20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistributionWithTags20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}