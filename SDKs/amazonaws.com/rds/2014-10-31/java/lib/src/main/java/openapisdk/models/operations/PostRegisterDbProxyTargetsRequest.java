package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterDbProxyTargetsRequest {
    public PostRegisterDbProxyTargetsQueryParams queryParams;
    public PostRegisterDbProxyTargetsRequest withQueryParams(PostRegisterDbProxyTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterDbProxyTargetsHeaders headers;
    public PostRegisterDbProxyTargetsRequest withHeaders(PostRegisterDbProxyTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterDbProxyTargetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}