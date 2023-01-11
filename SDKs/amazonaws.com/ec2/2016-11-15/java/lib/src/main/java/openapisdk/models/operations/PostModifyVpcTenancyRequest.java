package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcTenancyRequest {
    public PostModifyVpcTenancyQueryParams queryParams;
    public PostModifyVpcTenancyRequest withQueryParams(PostModifyVpcTenancyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpcTenancyHeaders headers;
    public PostModifyVpcTenancyRequest withHeaders(PostModifyVpcTenancyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpcTenancyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}