package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSalesTaxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryCode")
    public String countryCode;
    public DeleteSalesTaxPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jurisdictionId")
    public String jurisdictionId;
    public DeleteSalesTaxPathParams withJurisdictionId(String jurisdictionId) {
        this.jurisdictionId = jurisdictionId;
        return this;
    }
}