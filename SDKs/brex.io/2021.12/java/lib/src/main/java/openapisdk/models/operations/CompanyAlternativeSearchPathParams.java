package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyAlternativeSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public CompanyAlternativeSearchPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}