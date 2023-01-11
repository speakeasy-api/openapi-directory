package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchVideosCreativeByImageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3SearchVideosCreativeByImageHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=GI-Country-Code")
    public String giCountryCode;
    public GetV3SearchVideosCreativeByImageHeaders withGiCountryCode(String giCountryCode) {
        this.giCountryCode = giCountryCode;
        return this;
    }
}