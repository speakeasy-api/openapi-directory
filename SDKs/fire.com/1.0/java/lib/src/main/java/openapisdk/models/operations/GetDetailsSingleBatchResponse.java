package openapisdk.models.operations;



public class GetDetailsSingleBatchResponse {
    public String contentType;
    public GetDetailsSingleBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDetailsSingleBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems;
    public GetDetailsSingleBatchResponse withOnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems(openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems) {
        this.onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems = onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems;
        return this;
    }
}