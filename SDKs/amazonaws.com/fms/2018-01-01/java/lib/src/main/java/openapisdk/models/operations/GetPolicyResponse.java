package openapisdk.models.operations;



public class GetPolicyResponse {
    public String contentType;
    public GetPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPolicyResponse getPolicyResponse;
    public GetPolicyResponse withGetPolicyResponse(openapisdk.models.shared.GetPolicyResponse getPolicyResponse) {
        this.getPolicyResponse = getPolicyResponse;
        return this;
    }
    public Object internalErrorException;
    public GetPolicyResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public GetPolicyResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidTypeException;
    public GetPolicyResponse withInvalidTypeException(Object invalidTypeException) {
        this.invalidTypeException = invalidTypeException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}