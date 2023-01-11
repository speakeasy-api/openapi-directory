package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListMembersPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}