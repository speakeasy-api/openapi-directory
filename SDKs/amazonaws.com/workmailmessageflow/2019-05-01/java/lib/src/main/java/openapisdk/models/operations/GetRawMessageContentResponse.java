package openapisdk.models.operations;



public class GetRawMessageContentResponse {
    public String contentType;
    public GetRawMessageContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRawMessageContentResponse getRawMessageContentResponse;
    public GetRawMessageContentResponse withGetRawMessageContentResponse(openapisdk.models.shared.GetRawMessageContentResponse getRawMessageContentResponse) {
        this.getRawMessageContentResponse = getRawMessageContentResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetRawMessageContentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetRawMessageContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}