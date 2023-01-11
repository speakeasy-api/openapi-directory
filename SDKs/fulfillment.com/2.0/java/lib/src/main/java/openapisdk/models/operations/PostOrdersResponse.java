package openapisdk.models.operations;



public class PostOrdersResponse {
    public String contentType;
    public PostOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PostOrdersErrorStandardWithContextV2 errorStandardWithContextV2;
    public PostOrdersResponse withErrorStandardWithContextV2(PostOrdersErrorStandardWithContextV2 errorStandardWithContextV2) {
        this.errorStandardWithContextV2 = errorStandardWithContextV2;
        return this;
    }
    public PostOrdersOrderResponseV2 orderResponseV2;
    public PostOrdersResponse withOrderResponseV2(PostOrdersOrderResponseV2 orderResponseV2) {
        this.orderResponseV2 = orderResponseV2;
        return this;
    }
    public Long statusCode;
    public PostOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema;
    public PostOrdersResponse withOneordersGetResponses404ContentApplication1jsonSchema(openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema) {
        this.oneordersGetResponses404ContentApplication1jsonSchema = oneordersGetResponses404ContentApplication1jsonSchema;
        return this;
    }
}