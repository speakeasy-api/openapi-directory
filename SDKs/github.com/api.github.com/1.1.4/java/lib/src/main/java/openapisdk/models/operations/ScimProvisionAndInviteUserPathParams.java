package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimProvisionAndInviteUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ScimProvisionAndInviteUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}