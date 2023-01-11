package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CreateSubscriptionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}