package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostWebhooksIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}