package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName;
    public OptimiseAllPathParams withActionName(openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName) {
        this.actionName = actionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public OptimiseAllPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}