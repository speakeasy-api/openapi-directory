package openapisdk.models.operations;



public class GetCanaryRunsResponse {
    public String contentType;
    public GetCanaryRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCanaryRunsResponse getCanaryRunsResponse;
    public GetCanaryRunsResponse withGetCanaryRunsResponse(openapisdk.models.shared.GetCanaryRunsResponse getCanaryRunsResponse) {
        this.getCanaryRunsResponse = getCanaryRunsResponse;
        return this;
    }
    public Object internalServerException;
    public GetCanaryRunsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCanaryRunsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCanaryRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetCanaryRunsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}