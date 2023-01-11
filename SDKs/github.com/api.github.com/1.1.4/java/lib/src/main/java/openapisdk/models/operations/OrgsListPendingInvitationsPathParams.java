package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListPendingInvitationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListPendingInvitationsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}