package openapisdk.models.operations;



public class GetPermissionPolicyResponse {
    public String contentType;
    public GetPermissionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPermissionPolicyResponse getPermissionPolicyResponse;
    public GetPermissionPolicyResponse withGetPermissionPolicyResponse(openapisdk.models.shared.GetPermissionPolicyResponse getPermissionPolicyResponse) {
        this.getPermissionPolicyResponse = getPermissionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetPermissionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetPermissionPolicyResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetPermissionPolicyResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}