package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20200531Request {
    public CreateDistributionWithTags20200531QueryParams queryParams;
    public CreateDistributionWithTags20200531Request withQueryParams(CreateDistributionWithTags20200531QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateDistributionWithTags20200531Headers headers;
    public CreateDistributionWithTags20200531Request withHeaders(CreateDistributionWithTags20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistributionWithTags20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}