package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingProfilesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public BillingProfilesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}