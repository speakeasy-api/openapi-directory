package openapisdk.models.operations;



public class GetKeyPolicyResponse {
    public String contentType;
    public GetKeyPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GetKeyPolicyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetKeyPolicyResponse getKeyPolicyResponse;
    public GetKeyPolicyResponse withGetKeyPolicyResponse(openapisdk.models.shared.GetKeyPolicyResponse getKeyPolicyResponse) {
        this.getKeyPolicyResponse = getKeyPolicyResponse;
        return this;
    }
    public Object invalidArnException;
    public GetKeyPolicyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public GetKeyPolicyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GetKeyPolicyResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public GetKeyPolicyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetKeyPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}