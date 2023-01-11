package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimDeleteUserFromOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ScimDeleteUserFromOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scim_user_id")
    public String scimUserId;
    public ScimDeleteUserFromOrgPathParams withScimUserId(String scimUserId) {
        this.scimUserId = scimUserId;
        return this;
    }
}