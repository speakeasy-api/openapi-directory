package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3CustomersCurrentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3CustomersCurrentHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}