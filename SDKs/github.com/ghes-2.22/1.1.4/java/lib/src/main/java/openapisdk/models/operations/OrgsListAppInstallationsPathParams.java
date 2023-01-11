package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListAppInstallationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListAppInstallationsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}