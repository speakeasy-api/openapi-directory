package openapisdk.models.operations;



public class ListWorldGenerationJobsResponse {
    public String contentType;
    public ListWorldGenerationJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorldGenerationJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListWorldGenerationJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListWorldGenerationJobsResponse listWorldGenerationJobsResponse;
    public ListWorldGenerationJobsResponse withListWorldGenerationJobsResponse(openapisdk.models.shared.ListWorldGenerationJobsResponse listWorldGenerationJobsResponse) {
        this.listWorldGenerationJobsResponse = listWorldGenerationJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListWorldGenerationJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorldGenerationJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}