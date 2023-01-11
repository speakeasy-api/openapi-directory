package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsCheckBlockedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsCheckBlockedUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsCheckBlockedUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}