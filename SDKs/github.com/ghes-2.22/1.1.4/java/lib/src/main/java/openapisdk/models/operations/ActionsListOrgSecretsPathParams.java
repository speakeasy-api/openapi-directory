package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListOrgSecretsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsListOrgSecretsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}