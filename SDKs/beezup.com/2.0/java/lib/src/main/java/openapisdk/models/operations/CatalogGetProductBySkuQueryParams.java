package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetProductBySkuQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sku")
    public String sku;
    public CatalogGetProductBySkuQueryParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}