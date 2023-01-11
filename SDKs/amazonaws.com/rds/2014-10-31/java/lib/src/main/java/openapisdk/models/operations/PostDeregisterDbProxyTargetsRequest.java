package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterDbProxyTargetsRequest {
    public PostDeregisterDbProxyTargetsQueryParams queryParams;
    public PostDeregisterDbProxyTargetsRequest withQueryParams(PostDeregisterDbProxyTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterDbProxyTargetsHeaders headers;
    public PostDeregisterDbProxyTargetsRequest withHeaders(PostDeregisterDbProxyTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterDbProxyTargetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}