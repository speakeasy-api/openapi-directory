package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsListPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}