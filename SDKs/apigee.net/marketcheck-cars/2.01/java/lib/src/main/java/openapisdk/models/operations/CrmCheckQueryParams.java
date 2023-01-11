package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CrmCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public CrmCheckQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sale_date")
    public String saleDate;
    public CrmCheckQueryParams withSaleDate(String saleDate) {
        this.saleDate = saleDate;
        return this;
    }
}