package openapisdk.models.operations;



public class DeleteOrdersIdResponse {
    public String contentType;
    public DeleteOrdersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteOrdersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema;
    public DeleteOrdersIdResponse withOneordersGetResponses404ContentApplication1jsonSchema(openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema) {
        this.oneordersGetResponses404ContentApplication1jsonSchema = oneordersGetResponses404ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchema oneordersPostResponses201ContentApplication1jsonSchema;
    public DeleteOrdersIdResponse withOneordersPostResponses201ContentApplication1jsonSchema(openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchema oneordersPostResponses201ContentApplication1jsonSchema) {
        this.oneordersPostResponses201ContentApplication1jsonSchema = oneordersPostResponses201ContentApplication1jsonSchema;
        return this;
    }
}