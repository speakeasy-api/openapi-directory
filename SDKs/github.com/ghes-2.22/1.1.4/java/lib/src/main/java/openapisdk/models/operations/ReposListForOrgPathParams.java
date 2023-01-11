package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ReposListForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}