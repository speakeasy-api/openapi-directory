package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsUpdatePathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}