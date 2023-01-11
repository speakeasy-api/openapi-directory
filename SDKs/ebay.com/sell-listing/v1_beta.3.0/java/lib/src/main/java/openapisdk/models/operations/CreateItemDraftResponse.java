package openapisdk.models.operations;



public class CreateItemDraftResponse {
    public String contentType;
    public CreateItemDraftResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ItemDraftResponse itemDraftResponse;
    public CreateItemDraftResponse withItemDraftResponse(openapisdk.models.shared.ItemDraftResponse itemDraftResponse) {
        this.itemDraftResponse = itemDraftResponse;
        return this;
    }
    public Long statusCode;
    public CreateItemDraftResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}