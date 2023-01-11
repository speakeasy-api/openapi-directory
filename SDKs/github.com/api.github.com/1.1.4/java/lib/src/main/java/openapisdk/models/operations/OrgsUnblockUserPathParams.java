package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUnblockUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsUnblockUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsUnblockUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}