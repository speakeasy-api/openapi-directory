package openapisdk.models.operations;



public class DescribeCrossAccountAccessRoleResponse {
    public String contentType;
    public DescribeCrossAccountAccessRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCrossAccountAccessRoleResponse describeCrossAccountAccessRoleResponse;
    public DescribeCrossAccountAccessRoleResponse withDescribeCrossAccountAccessRoleResponse(openapisdk.models.shared.DescribeCrossAccountAccessRoleResponse describeCrossAccountAccessRoleResponse) {
        this.describeCrossAccountAccessRoleResponse = describeCrossAccountAccessRoleResponse;
        return this;
    }
    public Object internalException;
    public DescribeCrossAccountAccessRoleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Long statusCode;
    public DescribeCrossAccountAccessRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}