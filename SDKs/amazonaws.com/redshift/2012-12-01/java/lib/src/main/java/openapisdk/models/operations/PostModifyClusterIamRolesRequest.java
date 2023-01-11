package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterIamRolesRequest {
    public PostModifyClusterIamRolesQueryParams queryParams;
    public PostModifyClusterIamRolesRequest withQueryParams(PostModifyClusterIamRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterIamRolesHeaders headers;
    public PostModifyClusterIamRolesRequest withHeaders(PostModifyClusterIamRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterIamRolesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}