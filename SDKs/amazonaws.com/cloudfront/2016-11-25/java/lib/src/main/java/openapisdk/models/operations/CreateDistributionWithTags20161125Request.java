package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20161125Request {
    public CreateDistributionWithTags20161125QueryParams queryParams;
    public CreateDistributionWithTags20161125Request withQueryParams(CreateDistributionWithTags20161125QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateDistributionWithTags20161125Headers headers;
    public CreateDistributionWithTags20161125Request withHeaders(CreateDistributionWithTags20161125Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistributionWithTags20161125Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}