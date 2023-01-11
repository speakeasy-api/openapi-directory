package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLookupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public VatLookupPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}