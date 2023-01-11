package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListWebhooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsListWebhooksPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}