package openapisdk.models.operations;



public class ListPipelinesResponse {
    public Object accessDeniedException;
    public ListPipelinesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPipelinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ListPipelinesResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ListPipelinesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListPipelinesResponse listPipelinesResponse;
    public ListPipelinesResponse withListPipelinesResponse(openapisdk.models.shared.ListPipelinesResponse listPipelinesResponse) {
        this.listPipelinesResponse = listPipelinesResponse;
        return this;
    }
    public Long statusCode;
    public ListPipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPipelinesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}