package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20180618Request {
    public CreateStreamingDistributionWithTags20180618QueryParams queryParams;
    public CreateStreamingDistributionWithTags20180618Request withQueryParams(CreateStreamingDistributionWithTags20180618QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateStreamingDistributionWithTags20180618Headers headers;
    public CreateStreamingDistributionWithTags20180618Request withHeaders(CreateStreamingDistributionWithTags20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateStreamingDistributionWithTags20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}