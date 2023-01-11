package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=now")
    public Boolean now;
    public DeleteScoreQueryParams withNow(Boolean now) {
        this.now = now;
        return this;
    }
}