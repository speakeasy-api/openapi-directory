package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSalesTaxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryCode")
    public String countryCode;
    public GetSalesTaxPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jurisdictionId")
    public String jurisdictionId;
    public GetSalesTaxPathParams withJurisdictionId(String jurisdictionId) {
        this.jurisdictionId = jurisdictionId;
        return this;
    }
}