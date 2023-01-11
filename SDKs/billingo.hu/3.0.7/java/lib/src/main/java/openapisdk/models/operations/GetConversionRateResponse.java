package openapisdk.models.operations;



public class GetConversionRateResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public GetConversionRateResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public GetConversionRateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversationRate conversationRate;
    public GetConversionRateResponse withConversationRate(openapisdk.models.shared.ConversationRate conversationRate) {
        this.conversationRate = conversationRate;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetConversionRateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public GetConversionRateResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetConversionRateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public GetConversionRateResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}