package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetOrgInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public AppsGetOrgInstallationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}