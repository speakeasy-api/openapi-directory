package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupsGroupIdMembershipsUserIdRequest {
    public PatchGroupsGroupIdMembershipsUserIdPathParams pathParams;
    public PatchGroupsGroupIdMembershipsUserIdRequest withPathParams(PatchGroupsGroupIdMembershipsUserIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchGroupsGroupIdMembershipsUserIdRequestBody request;
    public PatchGroupsGroupIdMembershipsUserIdRequest withRequest(PatchGroupsGroupIdMembershipsUserIdRequestBody request) {
        this.request = request;
        return this;
    }
}