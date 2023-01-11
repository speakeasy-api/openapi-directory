package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIsoCode")
    public String countryIsoCode;
    public GetChannelsPathParams withCountryIsoCode(String countryIsoCode) {
        this.countryIsoCode = countryIsoCode;
        return this;
    }
}