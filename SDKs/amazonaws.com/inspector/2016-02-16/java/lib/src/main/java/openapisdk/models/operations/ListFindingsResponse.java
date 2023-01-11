package openapisdk.models.operations;



public class ListFindingsResponse {
    public Object accessDeniedException;
    public ListFindingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListFindingsResponse listFindingsResponse;
    public ListFindingsResponse withListFindingsResponse(openapisdk.models.shared.ListFindingsResponse listFindingsResponse) {
        this.listFindingsResponse = listFindingsResponse;
        return this;
    }
    public Object noSuchEntityException;
    public ListFindingsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public ListFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}