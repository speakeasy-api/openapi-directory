package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ActivateSubscriptionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}