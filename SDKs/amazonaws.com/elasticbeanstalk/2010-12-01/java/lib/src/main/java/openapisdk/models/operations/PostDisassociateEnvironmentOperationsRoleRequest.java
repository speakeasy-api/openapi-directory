package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateEnvironmentOperationsRoleRequest {
    public PostDisassociateEnvironmentOperationsRoleQueryParams queryParams;
    public PostDisassociateEnvironmentOperationsRoleRequest withQueryParams(PostDisassociateEnvironmentOperationsRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateEnvironmentOperationsRoleHeaders headers;
    public PostDisassociateEnvironmentOperationsRoleRequest withHeaders(PostDisassociateEnvironmentOperationsRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateEnvironmentOperationsRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}