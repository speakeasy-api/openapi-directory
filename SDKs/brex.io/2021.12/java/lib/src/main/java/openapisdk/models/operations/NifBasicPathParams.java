package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifBasicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public NifBasicPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}