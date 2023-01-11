package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegenerateWebhookTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RegenerateWebhookTokenPathParams withId(String id) {
        this.id = id;
        return this;
    }
}