package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCoipPoolUsageRequest {
    public PostGetCoipPoolUsageQueryParams queryParams;
    public PostGetCoipPoolUsageRequest withQueryParams(PostGetCoipPoolUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetCoipPoolUsageHeaders headers;
    public PostGetCoipPoolUsageRequest withHeaders(PostGetCoipPoolUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetCoipPoolUsageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}