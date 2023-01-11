package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifComprehensivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public NifComprehensivePathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}