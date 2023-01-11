package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogMarketplacePropertiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirectionPageUrl")
    public String redirectionPageUrl;
    public GetChannelCatalogMarketplacePropertiesQueryParams withRedirectionPageUrl(String redirectionPageUrl) {
        this.redirectionPageUrl = redirectionPageUrl;
        return this;
    }
}