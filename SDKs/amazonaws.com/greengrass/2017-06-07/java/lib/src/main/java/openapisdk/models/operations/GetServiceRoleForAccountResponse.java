package openapisdk.models.operations;



public class GetServiceRoleForAccountResponse {
    public String contentType;
    public GetServiceRoleForAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceRoleForAccountResponse getServiceRoleForAccountResponse;
    public GetServiceRoleForAccountResponse withGetServiceRoleForAccountResponse(openapisdk.models.shared.GetServiceRoleForAccountResponse getServiceRoleForAccountResponse) {
        this.getServiceRoleForAccountResponse = getServiceRoleForAccountResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetServiceRoleForAccountResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public GetServiceRoleForAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}