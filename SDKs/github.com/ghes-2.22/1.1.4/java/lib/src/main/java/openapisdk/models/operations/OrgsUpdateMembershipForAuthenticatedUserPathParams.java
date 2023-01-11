package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUpdateMembershipForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsUpdateMembershipForAuthenticatedUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}