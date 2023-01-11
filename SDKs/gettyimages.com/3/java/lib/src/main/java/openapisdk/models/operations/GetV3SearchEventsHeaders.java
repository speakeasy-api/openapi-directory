package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchEventsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3SearchEventsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=GI-Country-Code")
    public String giCountryCode;
    public GetV3SearchEventsHeaders withGiCountryCode(String giCountryCode) {
        this.giCountryCode = giCountryCode;
        return this;
    }
}