package openapisdk.models.operations;



public class PutResourcePolicyResponse {
    public String contentType;
    public PutResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public PutResourcePolicyResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public PutResourcePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public PutResourcePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object malformedPolicyDocumentException;
    public PutResourcePolicyResponse withMalformedPolicyDocumentException(Object malformedPolicyDocumentException) {
        this.malformedPolicyDocumentException = malformedPolicyDocumentException;
        return this;
    }
    public Object publicPolicyException;
    public PutResourcePolicyResponse withPublicPolicyException(Object publicPolicyException) {
        this.publicPolicyException = publicPolicyException;
        return this;
    }
    public openapisdk.models.shared.PutResourcePolicyResponse putResourcePolicyResponse;
    public PutResourcePolicyResponse withPutResourcePolicyResponse(openapisdk.models.shared.PutResourcePolicyResponse putResourcePolicyResponse) {
        this.putResourcePolicyResponse = putResourcePolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}