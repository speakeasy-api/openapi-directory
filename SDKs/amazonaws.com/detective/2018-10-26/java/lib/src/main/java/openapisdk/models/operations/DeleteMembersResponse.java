package openapisdk.models.operations;



public class DeleteMembersResponse {
    public Object conflictException;
    public DeleteMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
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
    public Object internalServerException;
    public DeleteMembersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
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
    public Object validationException;
    public DeleteMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}