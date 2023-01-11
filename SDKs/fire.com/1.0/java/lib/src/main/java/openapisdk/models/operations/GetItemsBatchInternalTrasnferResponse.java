package openapisdk.models.operations;



public class GetItemsBatchInternalTrasnferResponse {
    public String contentType;
    public GetItemsBatchInternalTrasnferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetItemsBatchInternalTrasnferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchema onebatchesGetResponses200ContentApplication1jsonSchema;
    public GetItemsBatchInternalTrasnferResponse withOnebatchesGetResponses200ContentApplication1jsonSchema(openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchema onebatchesGetResponses200ContentApplication1jsonSchema) {
        this.onebatchesGetResponses200ContentApplication1jsonSchema = onebatchesGetResponses200ContentApplication1jsonSchema;
        return this;
    }
}