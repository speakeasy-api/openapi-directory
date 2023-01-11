package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetryPushOrdersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetryPushOrdersPathParams withId(String id) {
        this.id = id;
        return this;
    }
}