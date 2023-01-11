package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListPublicOrgEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActivityListPublicOrgEventsPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}