package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20180618Request {
    public CreateDistributionWithTags20180618QueryParams queryParams;
    public CreateDistributionWithTags20180618Request withQueryParams(CreateDistributionWithTags20180618QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateDistributionWithTags20180618Headers headers;
    public CreateDistributionWithTags20180618Request withHeaders(CreateDistributionWithTags20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateDistributionWithTags20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}