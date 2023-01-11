package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdDatasetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=check_stock_listing")
    public Boolean checkStockListing;
    public CompanyIdDatasetQueryParams withCheckStockListing(Boolean checkStockListing) {
        this.checkStockListing = checkStockListing;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public CompanyIdDatasetLangEnum lang;
    public CompanyIdDatasetQueryParams withLang(CompanyIdDatasetLangEnum lang) {
        this.lang = lang;
        return this;
    }
}