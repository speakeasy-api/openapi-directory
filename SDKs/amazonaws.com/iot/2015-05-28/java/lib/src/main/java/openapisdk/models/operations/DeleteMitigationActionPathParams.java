package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMitigationActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public String actionName;
    public DeleteMitigationActionPathParams withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
}