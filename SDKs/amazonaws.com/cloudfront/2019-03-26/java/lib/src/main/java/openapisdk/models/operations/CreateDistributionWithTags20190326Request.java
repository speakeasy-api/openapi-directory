package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20190326Request {
    public CreateDistributionWithTags20190326QueryParams queryParams;
    public CreateDistributionWithTags20190326Request withQueryParams(CreateDistributionWithTags20190326QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateDistributionWithTags20190326Headers headers;
    public CreateDistributionWithTags20190326Request withHeaders(CreateDistributionWithTags20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistributionWithTags20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}