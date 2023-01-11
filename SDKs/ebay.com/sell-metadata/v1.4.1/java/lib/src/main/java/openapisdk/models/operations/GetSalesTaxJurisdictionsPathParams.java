package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSalesTaxJurisdictionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryCode")
    public String countryCode;
    public GetSalesTaxJurisdictionsPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}