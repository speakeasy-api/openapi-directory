package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyMountTargetSecurityGroupsRequest {
    public ModifyMountTargetSecurityGroupsPathParams pathParams;
    public ModifyMountTargetSecurityGroupsRequest withPathParams(ModifyMountTargetSecurityGroupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ModifyMountTargetSecurityGroupsHeaders headers;
    public ModifyMountTargetSecurityGroupsRequest withHeaders(ModifyMountTargetSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ModifyMountTargetSecurityGroupsRequestBody request;
    public ModifyMountTargetSecurityGroupsRequest withRequest(ModifyMountTargetSecurityGroupsRequestBody request) {
        this.request = request;
        return this;
    }
}