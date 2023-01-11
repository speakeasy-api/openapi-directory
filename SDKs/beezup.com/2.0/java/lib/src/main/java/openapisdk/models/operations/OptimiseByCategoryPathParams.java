package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseByCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName;
    public OptimiseByCategoryPathParams withActionName(openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName) {
        this.actionName = actionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=catalogCategoryId")
    public String catalogCategoryId;
    public OptimiseByCategoryPathParams withCatalogCategoryId(String catalogCategoryId) {
        this.catalogCategoryId = catalogCategoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public OptimiseByCategoryPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}