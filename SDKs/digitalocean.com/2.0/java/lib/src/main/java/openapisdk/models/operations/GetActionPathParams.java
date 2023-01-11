package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action_id")
    public Long actionId;
    public GetActionPathParams withActionId(Long actionId) {
        this.actionId = actionId;
        return this;
    }
}