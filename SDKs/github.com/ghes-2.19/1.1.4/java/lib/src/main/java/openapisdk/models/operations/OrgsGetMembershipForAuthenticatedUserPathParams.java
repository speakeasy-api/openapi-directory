package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsGetMembershipForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsGetMembershipForAuthenticatedUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}