package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLevelTwoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public VatLevelTwoPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}