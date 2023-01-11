package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListFailedInvitationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListFailedInvitationsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}