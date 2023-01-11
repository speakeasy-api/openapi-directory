package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20161125Request {
    public CreateStreamingDistributionWithTags20161125QueryParams queryParams;
    public CreateStreamingDistributionWithTags20161125Request withQueryParams(CreateStreamingDistributionWithTags20161125QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateStreamingDistributionWithTags20161125Headers headers;
    public CreateStreamingDistributionWithTags20161125Request withHeaders(CreateStreamingDistributionWithTags20161125Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistributionWithTags20161125Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}