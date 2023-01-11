package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetOrgPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsGetOrgPublicKeyPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}