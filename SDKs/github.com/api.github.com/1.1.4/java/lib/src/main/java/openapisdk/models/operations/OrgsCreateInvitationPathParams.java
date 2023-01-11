package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsCreateInvitationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsCreateInvitationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}