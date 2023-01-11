package openapisdk.models.operations;



public class GetMembersResponse {
    public String contentType;
    public GetMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMembersResponse getMembersResponse;
    public GetMembersResponse withGetMembersResponse(openapisdk.models.shared.GetMembersResponse getMembersResponse) {
        this.getMembersResponse = getMembersResponse;
        return this;
    }
    public Object internalServerException;
    public GetMembersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}