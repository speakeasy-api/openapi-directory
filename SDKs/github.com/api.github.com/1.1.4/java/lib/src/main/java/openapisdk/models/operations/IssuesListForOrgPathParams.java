package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public IssuesListForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}