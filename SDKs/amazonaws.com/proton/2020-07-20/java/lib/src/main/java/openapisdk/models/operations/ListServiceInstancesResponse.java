package openapisdk.models.operations;



public class ListServiceInstancesResponse {
    public Object accessDeniedException;
    public ListServiceInstancesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListServiceInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListServiceInstancesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListServiceInstancesOutput listServiceInstancesOutput;
    public ListServiceInstancesResponse withListServiceInstancesOutput(openapisdk.models.shared.ListServiceInstancesOutput listServiceInstancesOutput) {
        this.listServiceInstancesOutput = listServiceInstancesOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListServiceInstancesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListServiceInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListServiceInstancesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListServiceInstancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}