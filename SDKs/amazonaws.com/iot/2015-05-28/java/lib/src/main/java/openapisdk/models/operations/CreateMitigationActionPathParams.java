package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMitigationActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public String actionName;
    public CreateMitigationActionPathParams withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
}