package openapisdk.models.operations;



public class GetAssociatedRoleResponse {
    public Object badRequestException;
    public GetAssociatedRoleResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetAssociatedRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssociatedRoleResponse getAssociatedRoleResponse;
    public GetAssociatedRoleResponse withGetAssociatedRoleResponse(openapisdk.models.shared.GetAssociatedRoleResponse getAssociatedRoleResponse) {
        this.getAssociatedRoleResponse = getAssociatedRoleResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetAssociatedRoleResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public GetAssociatedRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}