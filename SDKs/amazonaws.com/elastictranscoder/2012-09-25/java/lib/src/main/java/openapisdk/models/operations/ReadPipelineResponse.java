package openapisdk.models.operations;



public class ReadPipelineResponse {
    public Object accessDeniedException;
    public ReadPipelineResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ReadPipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ReadPipelineResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ReadPipelineResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ReadPipelineResponse readPipelineResponse;
    public ReadPipelineResponse withReadPipelineResponse(openapisdk.models.shared.ReadPipelineResponse readPipelineResponse) {
        this.readPipelineResponse = readPipelineResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ReadPipelineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ReadPipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ReadPipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}