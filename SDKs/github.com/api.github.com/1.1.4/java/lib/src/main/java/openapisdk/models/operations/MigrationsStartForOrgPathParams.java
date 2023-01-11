package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsStartForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public MigrationsStartForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}