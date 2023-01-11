package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsCreateWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsCreateWebhookPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}