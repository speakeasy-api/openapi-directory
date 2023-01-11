package openapisdk.models.operations;



public class ListInstancesResponse {
    public Object accessDeniedException;
    public ListInstancesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInstancesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInstancesResponse listInstancesResponse;
    public ListInstancesResponse withListInstancesResponse(openapisdk.models.shared.ListInstancesResponse listInstancesResponse) {
        this.listInstancesResponse = listInstancesResponse;
        return this;
    }
    public Long statusCode;
    public ListInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInstancesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListInstancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}