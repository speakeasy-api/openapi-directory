package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMitigationActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public String actionName;
    public DescribeMitigationActionPathParams withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
}