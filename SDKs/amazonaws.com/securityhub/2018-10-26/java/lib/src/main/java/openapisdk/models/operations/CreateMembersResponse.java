package openapisdk.models.operations;



public class CreateMembersResponse {
    public String contentType;
    public CreateMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMembersResponse createMembersResponse;
    public CreateMembersResponse withCreateMembersResponse(openapisdk.models.shared.CreateMembersResponse createMembersResponse) {
        this.createMembersResponse = createMembersResponse;
        return this;
    }
    public Object internalException;
    public CreateMembersResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public CreateMembersResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public CreateMembersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateMembersResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceConflictException;
    public CreateMembersResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Long statusCode;
    public CreateMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}