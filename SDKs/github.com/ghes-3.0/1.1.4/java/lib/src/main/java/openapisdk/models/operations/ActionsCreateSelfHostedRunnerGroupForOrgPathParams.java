package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateSelfHostedRunnerGroupForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsCreateSelfHostedRunnerGroupForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}