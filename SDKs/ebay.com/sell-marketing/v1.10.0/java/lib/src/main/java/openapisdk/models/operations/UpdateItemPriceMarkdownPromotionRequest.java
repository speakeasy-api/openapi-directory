package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemPriceMarkdownPromotionRequest {
    public UpdateItemPriceMarkdownPromotionPathParams pathParams;
    public UpdateItemPriceMarkdownPromotionRequest withPathParams(UpdateItemPriceMarkdownPromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemPriceMarkdown request;
    public UpdateItemPriceMarkdownPromotionRequest withRequest(openapisdk.models.shared.ItemPriceMarkdown request) {
        this.request = request;
        return this;
    }
    public UpdateItemPriceMarkdownPromotionSecurity security;
    public UpdateItemPriceMarkdownPromotionRequest withSecurity(UpdateItemPriceMarkdownPromotionSecurity security) {
        this.security = security;
        return this;
    }
}