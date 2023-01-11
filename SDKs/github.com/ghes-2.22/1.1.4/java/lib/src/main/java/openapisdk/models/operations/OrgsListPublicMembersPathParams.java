package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListPublicMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListPublicMembersPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}