package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimSetInformationForProvisionedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ScimSetInformationForProvisionedUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scim_user_id")
    public String scimUserId;
    public ScimSetInformationForProvisionedUserPathParams withScimUserId(String scimUserId) {
        this.scimUserId = scimUserId;
        return this;
    }
}