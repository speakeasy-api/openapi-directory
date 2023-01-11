package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteActionTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ActionTargetArn")
    public String actionTargetArn;
    public DeleteActionTargetPathParams withActionTargetArn(String actionTargetArn) {
        this.actionTargetArn = actionTargetArn;
        return this;
    }
}