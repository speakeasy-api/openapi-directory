package openapisdk.models.operations;



public class DisassociateMembersResponse {
    public String contentType;
    public DisassociateMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateMembersResponse;
    public DisassociateMembersResponse withDisassociateMembersResponse(java.util.Map<String, Object> disassociateMembersResponse) {
        this.disassociateMembersResponse = disassociateMembersResponse;
        return this;
    }
    public Object internalException;
    public DisassociateMembersResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DisassociateMembersResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DisassociateMembersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DisassociateMembersResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}