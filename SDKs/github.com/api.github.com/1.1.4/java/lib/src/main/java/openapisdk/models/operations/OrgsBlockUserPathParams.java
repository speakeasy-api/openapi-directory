package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsBlockUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsBlockUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsBlockUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}