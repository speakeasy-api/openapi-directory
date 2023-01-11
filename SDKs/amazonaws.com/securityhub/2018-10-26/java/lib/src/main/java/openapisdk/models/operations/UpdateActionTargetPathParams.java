package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActionTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ActionTargetArn")
    public String actionTargetArn;
    public UpdateActionTargetPathParams withActionTargetArn(String actionTargetArn) {
        this.actionTargetArn = actionTargetArn;
        return this;
    }
}