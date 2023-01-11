package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatComprehensivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public VatComprehensivePathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}