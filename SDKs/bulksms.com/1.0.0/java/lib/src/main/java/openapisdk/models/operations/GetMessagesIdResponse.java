package openapisdk.models.operations;



public class GetMessagesIdResponse {
    public String contentType;
    public GetMessagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMessagesIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Message message;
    public GetMessagesIdResponse withMessage(openapisdk.models.shared.Message message) {
        this.message = message;
        return this;
    }
    public Long statusCode;
    public GetMessagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}