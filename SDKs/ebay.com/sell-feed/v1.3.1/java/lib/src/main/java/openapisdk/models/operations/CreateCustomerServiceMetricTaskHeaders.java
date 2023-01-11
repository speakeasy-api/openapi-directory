package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerServiceMetricTaskHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept-language")
    public String acceptLanguage;
    public CreateCustomerServiceMetricTaskHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}