package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeactivateSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeactivateSubscriptionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}