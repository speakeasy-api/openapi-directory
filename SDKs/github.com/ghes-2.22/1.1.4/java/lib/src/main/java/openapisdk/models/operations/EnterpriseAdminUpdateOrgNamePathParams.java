package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateOrgNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public EnterpriseAdminUpdateOrgNamePathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}