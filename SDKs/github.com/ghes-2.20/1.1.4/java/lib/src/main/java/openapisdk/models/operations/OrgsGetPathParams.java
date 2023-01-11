package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsGetPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}