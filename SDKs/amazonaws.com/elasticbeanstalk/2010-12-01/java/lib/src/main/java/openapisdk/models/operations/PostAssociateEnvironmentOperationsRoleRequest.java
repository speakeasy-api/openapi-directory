package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateEnvironmentOperationsRoleRequest {
    public PostAssociateEnvironmentOperationsRoleQueryParams queryParams;
    public PostAssociateEnvironmentOperationsRoleRequest withQueryParams(PostAssociateEnvironmentOperationsRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateEnvironmentOperationsRoleHeaders headers;
    public PostAssociateEnvironmentOperationsRoleRequest withHeaders(PostAssociateEnvironmentOperationsRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateEnvironmentOperationsRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}