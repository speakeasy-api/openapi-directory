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
    public Object internalServerException;
    public CreateMembersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}