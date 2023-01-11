package openapisdk.models.operations;



public class AssociateRoleToGroupResponse {
    public openapisdk.models.shared.AssociateRoleToGroupResponse associateRoleToGroupResponse;
    public AssociateRoleToGroupResponse withAssociateRoleToGroupResponse(openapisdk.models.shared.AssociateRoleToGroupResponse associateRoleToGroupResponse) {
        this.associateRoleToGroupResponse = associateRoleToGroupResponse;
        return this;
    }
    public Object badRequestException;
    public AssociateRoleToGroupResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public AssociateRoleToGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public AssociateRoleToGroupResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public AssociateRoleToGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}