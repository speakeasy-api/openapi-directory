package openapisdk.models.operations;



public class PutPermissionPolicyResponse {
    public String contentType;
    public PutPermissionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> putPermissionPolicyResponse;
    public PutPermissionPolicyResponse withPutPermissionPolicyResponse(java.util.Map<String, Object> putPermissionPolicyResponse) {
        this.putPermissionPolicyResponse = putPermissionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public PutPermissionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public PutPermissionPolicyResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidPermissionPolicyException;
    public PutPermissionPolicyResponse withWafInvalidPermissionPolicyException(Object wafInvalidPermissionPolicyException) {
        this.wafInvalidPermissionPolicyException = wafInvalidPermissionPolicyException;
        return this;
    }
    public Object wafNonexistentItemException;
    public PutPermissionPolicyResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public PutPermissionPolicyResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}