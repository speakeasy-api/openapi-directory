package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimListProvisionedIdentitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ScimListProvisionedIdentitiesPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}