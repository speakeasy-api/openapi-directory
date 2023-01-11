package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListBlockedUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListBlockedUsersPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}