package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderManagementReadyMarketplaceBusinessCodeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String[] acceptLanguage;
    public GetOrderManagementReadyMarketplaceBusinessCodeHeaders withAcceptLanguage(String[] acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}