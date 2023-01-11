package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseByProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName;
    public OptimiseByProductPathParams withActionName(openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName) {
        this.actionName = actionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public OptimiseByProductPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public OptimiseByProductPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}