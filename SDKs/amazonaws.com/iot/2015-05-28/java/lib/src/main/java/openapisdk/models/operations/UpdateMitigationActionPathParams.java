package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMitigationActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public String actionName;
    public UpdateMitigationActionPathParams withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
}