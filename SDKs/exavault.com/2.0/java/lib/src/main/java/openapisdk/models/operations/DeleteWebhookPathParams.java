package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteWebhookPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}