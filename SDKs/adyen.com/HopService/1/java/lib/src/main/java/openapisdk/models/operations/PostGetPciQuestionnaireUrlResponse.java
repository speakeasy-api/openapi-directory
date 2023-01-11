package openapisdk.models.operations;



public class PostGetPciQuestionnaireUrlResponse {
    public String contentType;
    public PostGetPciQuestionnaireUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getPciUrlResponse;
    public PostGetPciQuestionnaireUrlResponse withGetPciUrlResponse(Object getPciUrlResponse) {
        this.getPciUrlResponse = getPciUrlResponse;
        return this;
    }
    public Object serviceError;
    public PostGetPciQuestionnaireUrlResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostGetPciQuestionnaireUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}