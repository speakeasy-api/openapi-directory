package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupsGroupIdMembershipsUserIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=admin")
    public Boolean admin;
    public PatchGroupsGroupIdMembershipsUserIdRequestBody withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
}