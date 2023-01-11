package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatBasicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public VatBasicPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}