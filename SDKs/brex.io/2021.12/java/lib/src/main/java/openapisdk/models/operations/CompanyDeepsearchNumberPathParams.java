package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyDeepsearchNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public CompanyDeepsearchNumberPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public CompanyDeepsearchNumberPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}