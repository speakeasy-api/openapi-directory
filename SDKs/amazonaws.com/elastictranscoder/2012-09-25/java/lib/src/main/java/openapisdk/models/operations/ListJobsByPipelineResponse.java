package openapisdk.models.operations;



public class ListJobsByPipelineResponse {
    public Object accessDeniedException;
    public ListJobsByPipelineResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListJobsByPipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ListJobsByPipelineResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ListJobsByPipelineResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListJobsByPipelineResponse listJobsByPipelineResponse;
    public ListJobsByPipelineResponse withListJobsByPipelineResponse(openapisdk.models.shared.ListJobsByPipelineResponse listJobsByPipelineResponse) {
        this.listJobsByPipelineResponse = listJobsByPipelineResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListJobsByPipelineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListJobsByPipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListJobsByPipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}