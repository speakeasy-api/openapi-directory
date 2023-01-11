package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3OrdersIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3OrdersIdHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}