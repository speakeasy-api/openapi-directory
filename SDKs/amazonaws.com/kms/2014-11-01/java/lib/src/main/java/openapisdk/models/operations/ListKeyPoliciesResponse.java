package openapisdk.models.operations;



public class ListKeyPoliciesResponse {
    public String contentType;
    public ListKeyPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ListKeyPoliciesResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public ListKeyPoliciesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public ListKeyPoliciesResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public ListKeyPoliciesResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public openapisdk.models.shared.ListKeyPoliciesResponse listKeyPoliciesResponse;
    public ListKeyPoliciesResponse withListKeyPoliciesResponse(openapisdk.models.shared.ListKeyPoliciesResponse listKeyPoliciesResponse) {
        this.listKeyPoliciesResponse = listKeyPoliciesResponse;
        return this;
    }
    public Object notFoundException;
    public ListKeyPoliciesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListKeyPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}