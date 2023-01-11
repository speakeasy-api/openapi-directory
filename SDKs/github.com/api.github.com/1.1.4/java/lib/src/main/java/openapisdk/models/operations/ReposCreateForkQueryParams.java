package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateForkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=org")
    public String org;
    public ReposCreateForkQueryParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization")
    public String organization;
    public ReposCreateForkQueryParams withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
}