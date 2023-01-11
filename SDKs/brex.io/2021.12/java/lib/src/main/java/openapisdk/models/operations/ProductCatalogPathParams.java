package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductCatalogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public ProductCatalogPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}