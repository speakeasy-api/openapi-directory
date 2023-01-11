package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemPriceMarkdownPromotionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemPriceMarkdown request;
    public CreateItemPriceMarkdownPromotionRequest withRequest(openapisdk.models.shared.ItemPriceMarkdown request) {
        this.request = request;
        return this;
    }
    public CreateItemPriceMarkdownPromotionSecurity security;
    public CreateItemPriceMarkdownPromotionRequest withSecurity(CreateItemPriceMarkdownPromotionSecurity security) {
        this.security = security;
        return this;
    }
}