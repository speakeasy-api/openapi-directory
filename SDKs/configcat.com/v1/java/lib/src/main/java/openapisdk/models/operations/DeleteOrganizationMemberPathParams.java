package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationMemberPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteOrganizationMemberPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}