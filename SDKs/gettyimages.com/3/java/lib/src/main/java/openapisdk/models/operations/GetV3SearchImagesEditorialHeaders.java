package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchImagesEditorialHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3SearchImagesEditorialHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=GI-Country-Code")
    public String giCountryCode;
    public GetV3SearchImagesEditorialHeaders withGiCountryCode(String giCountryCode) {
        this.giCountryCode = giCountryCode;
        return this;
    }
}