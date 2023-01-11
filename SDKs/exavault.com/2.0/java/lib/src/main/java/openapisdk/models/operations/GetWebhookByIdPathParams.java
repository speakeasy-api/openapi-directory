package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhookByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetWebhookByIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}