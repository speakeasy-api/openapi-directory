package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20181105Request {
    public CreateDistributionWithTags20181105QueryParams queryParams;
    public CreateDistributionWithTags20181105Request withQueryParams(CreateDistributionWithTags20181105QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateDistributionWithTags20181105Headers headers;
    public CreateDistributionWithTags20181105Request withHeaders(CreateDistributionWithTags20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistributionWithTags20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}