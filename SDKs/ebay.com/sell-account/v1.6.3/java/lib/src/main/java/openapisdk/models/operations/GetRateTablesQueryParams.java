package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRateTablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_code")
    public String countryCode;
    public GetRateTablesQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}