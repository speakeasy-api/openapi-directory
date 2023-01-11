package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsListForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public MigrationsListForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}