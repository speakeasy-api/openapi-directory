package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20170325Request {
    public CreateDistributionWithTags20170325QueryParams queryParams;
    public CreateDistributionWithTags20170325Request withQueryParams(CreateDistributionWithTags20170325QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateDistributionWithTags20170325Headers headers;
    public CreateDistributionWithTags20170325Request withHeaders(CreateDistributionWithTags20170325Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistributionWithTags20170325Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}