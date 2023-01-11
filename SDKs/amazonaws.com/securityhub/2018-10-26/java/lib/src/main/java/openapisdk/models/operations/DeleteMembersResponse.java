package openapisdk.models.operations;



public class DeleteMembersResponse {
    public String contentType;
    public DeleteMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteMembersResponse deleteMembersResponse;
    public DeleteMembersResponse withDeleteMembersResponse(openapisdk.models.shared.DeleteMembersResponse deleteMembersResponse) {
        this.deleteMembersResponse = deleteMembersResponse;
        return this;
    }
    public Object internalException;
    public DeleteMembersResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DeleteMembersResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DeleteMembersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DeleteMembersResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}