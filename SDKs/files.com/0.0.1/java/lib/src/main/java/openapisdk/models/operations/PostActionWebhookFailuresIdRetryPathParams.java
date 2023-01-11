package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostActionWebhookFailuresIdRetryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PostActionWebhookFailuresIdRetryPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}