package openapisdk.models.operations;



public class GetInventoryResponse {
    public String contentType;
    public GetInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetInventoryItemInventoryArrayV2 itemInventoryArrayV2;
    public GetInventoryResponse withItemInventoryArrayV2(GetInventoryItemInventoryArrayV2 itemInventoryArrayV2) {
        this.itemInventoryArrayV2 = itemInventoryArrayV2;
        return this;
    }
    public Long statusCode;
    public GetInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema;
    public GetInventoryResponse withOneordersGetResponses404ContentApplication1jsonSchema(openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema) {
        this.oneordersGetResponses404ContentApplication1jsonSchema = oneordersGetResponses404ContentApplication1jsonSchema;
        return this;
    }
}