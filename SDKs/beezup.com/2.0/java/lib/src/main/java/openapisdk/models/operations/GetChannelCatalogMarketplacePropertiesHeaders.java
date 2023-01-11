package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogMarketplacePropertiesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String[] acceptLanguage;
    public GetChannelCatalogMarketplacePropertiesHeaders withAcceptLanguage(String[] acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}