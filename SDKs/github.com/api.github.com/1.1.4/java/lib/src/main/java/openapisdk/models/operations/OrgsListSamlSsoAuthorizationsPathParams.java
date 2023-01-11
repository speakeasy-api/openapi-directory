package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListSamlSsoAuthorizationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListSamlSsoAuthorizationsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}