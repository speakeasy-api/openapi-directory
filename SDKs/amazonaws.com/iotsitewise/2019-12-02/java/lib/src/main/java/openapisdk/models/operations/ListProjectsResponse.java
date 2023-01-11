package openapisdk.models.operations;



public class ListProjectsResponse {
    public String contentType;
    public ListProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListProjectsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListProjectsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListProjectsResponse listProjectsResponse;
    public ListProjectsResponse withListProjectsResponse(openapisdk.models.shared.ListProjectsResponse listProjectsResponse) {
        this.listProjectsResponse = listProjectsResponse;
        return this;
    }
    public Long statusCode;
    public ListProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProjectsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}