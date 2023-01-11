package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateRoleToGroupRequest {
    public AssociateRoleToGroupPathParams pathParams;
    public AssociateRoleToGroupRequest withPathParams(AssociateRoleToGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssociateRoleToGroupHeaders headers;
    public AssociateRoleToGroupRequest withHeaders(AssociateRoleToGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateRoleToGroupRequestBody request;
    public AssociateRoleToGroupRequest withRequest(AssociateRoleToGroupRequestBody request) {
        this.request = request;
        return this;
    }
}