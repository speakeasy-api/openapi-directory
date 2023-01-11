package openapisdk.models.operations;



public class PutEmailIdentityDkimSigningAttributesResponse {
    public Object badRequestException;
    public PutEmailIdentityDkimSigningAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutEmailIdentityDkimSigningAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutEmailIdentityDkimSigningAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.PutEmailIdentityDkimSigningAttributesResponse putEmailIdentityDkimSigningAttributesResponse;
    public PutEmailIdentityDkimSigningAttributesResponse withPutEmailIdentityDkimSigningAttributesResponse(openapisdk.models.shared.PutEmailIdentityDkimSigningAttributesResponse putEmailIdentityDkimSigningAttributesResponse) {
        this.putEmailIdentityDkimSigningAttributesResponse = putEmailIdentityDkimSigningAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutEmailIdentityDkimSigningAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutEmailIdentityDkimSigningAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}