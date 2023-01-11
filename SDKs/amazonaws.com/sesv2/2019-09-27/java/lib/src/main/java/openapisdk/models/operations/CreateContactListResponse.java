package openapisdk.models.operations;



public class CreateContactListResponse {
    public Object alreadyExistsException;
    public CreateContactListResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateContactListResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateContactListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createContactListResponse;
    public CreateContactListResponse withCreateContactListResponse(java.util.Map<String, Object> createContactListResponse) {
        this.createContactListResponse = createContactListResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateContactListResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateContactListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateContactListResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}