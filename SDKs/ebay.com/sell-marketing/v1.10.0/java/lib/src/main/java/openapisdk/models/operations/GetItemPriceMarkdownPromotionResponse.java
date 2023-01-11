package openapisdk.models.operations;



public class GetItemPriceMarkdownPromotionResponse {
    public String contentType;
    public GetItemPriceMarkdownPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ItemPriceMarkdown itemPriceMarkdown;
    public GetItemPriceMarkdownPromotionResponse withItemPriceMarkdown(openapisdk.models.shared.ItemPriceMarkdown itemPriceMarkdown) {
        this.itemPriceMarkdown = itemPriceMarkdown;
        return this;
    }
    public Long statusCode;
    public GetItemPriceMarkdownPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}