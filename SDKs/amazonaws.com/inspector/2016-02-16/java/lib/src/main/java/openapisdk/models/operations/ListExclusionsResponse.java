package openapisdk.models.operations;



public class ListExclusionsResponse {
    public Object accessDeniedException;
    public ListExclusionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListExclusionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListExclusionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListExclusionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListExclusionsResponse listExclusionsResponse;
    public ListExclusionsResponse withListExclusionsResponse(openapisdk.models.shared.ListExclusionsResponse listExclusionsResponse) {
        this.listExclusionsResponse = listExclusionsResponse;
        return this;
    }
    public Object noSuchEntityException;
    public ListExclusionsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public ListExclusionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}