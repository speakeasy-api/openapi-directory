package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSalesTaxesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_code")
    public String countryCode;
    public GetSalesTaxesQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}