package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListPreReceiveHooksForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public EnterpriseAdminListPreReceiveHooksForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}