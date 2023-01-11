package openapisdk.models.operations;



public class ListMembersResponse {
    public String contentType;
    public ListMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListMembersResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public ListMembersResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public ListMembersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public ListMembersResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListMembersResponse listMembersResponse;
    public ListMembersResponse withListMembersResponse(openapisdk.models.shared.ListMembersResponse listMembersResponse) {
        this.listMembersResponse = listMembersResponse;
        return this;
    }
    public Long statusCode;
    public ListMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}