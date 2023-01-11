package openapisdk.models.operations;



public class AssociateSoftwareTokenResponse {
    public openapisdk.models.shared.AssociateSoftwareTokenResponse associateSoftwareTokenResponse;
    public AssociateSoftwareTokenResponse withAssociateSoftwareTokenResponse(openapisdk.models.shared.AssociateSoftwareTokenResponse associateSoftwareTokenResponse) {
        this.associateSoftwareTokenResponse = associateSoftwareTokenResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AssociateSoftwareTokenResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AssociateSoftwareTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AssociateSoftwareTokenResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateSoftwareTokenResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AssociateSoftwareTokenResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateSoftwareTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object softwareTokenMFANotFoundException;
    public AssociateSoftwareTokenResponse withSoftwareTokenMfaNotFoundException(Object softwareTokenMFANotFoundException) {
        this.softwareTokenMFANotFoundException = softwareTokenMFANotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateSoftwareTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}