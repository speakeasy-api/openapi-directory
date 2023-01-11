package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanySearchNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public CompanySearchNamePathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CompanySearchNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
}