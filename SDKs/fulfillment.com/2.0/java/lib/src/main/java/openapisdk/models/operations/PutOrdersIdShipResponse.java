package openapisdk.models.operations;



public class PutOrdersIdShipResponse {
    public String contentType;
    public PutOrdersIdShipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutOrdersIdShipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchema oneordersPostResponses201ContentApplication1jsonSchema;
    public PutOrdersIdShipResponse withOneordersPostResponses201ContentApplication1jsonSchema(openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchema oneordersPostResponses201ContentApplication1jsonSchema) {
        this.oneordersPostResponses201ContentApplication1jsonSchema = oneordersPostResponses201ContentApplication1jsonSchema;
        return this;
    }
}