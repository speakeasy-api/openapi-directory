package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListSelectedReposForOrgSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsListSelectedReposForOrgSecretPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsListSelectedReposForOrgSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}