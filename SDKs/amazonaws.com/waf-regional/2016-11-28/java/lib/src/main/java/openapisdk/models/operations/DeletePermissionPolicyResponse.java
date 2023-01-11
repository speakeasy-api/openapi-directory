package openapisdk.models.operations;



public class DeletePermissionPolicyResponse {
    public String contentType;
    public DeletePermissionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePermissionPolicyResponse;
    public DeletePermissionPolicyResponse withDeletePermissionPolicyResponse(java.util.Map<String, Object> deletePermissionPolicyResponse) {
        this.deletePermissionPolicyResponse = deletePermissionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public DeletePermissionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeletePermissionPolicyResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeletePermissionPolicyResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeletePermissionPolicyResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}