package openapisdk.models.operations;



public class AssociateServiceRoleToAccountResponse {
    public openapisdk.models.shared.AssociateServiceRoleToAccountResponse associateServiceRoleToAccountResponse;
    public AssociateServiceRoleToAccountResponse withAssociateServiceRoleToAccountResponse(openapisdk.models.shared.AssociateServiceRoleToAccountResponse associateServiceRoleToAccountResponse) {
        this.associateServiceRoleToAccountResponse = associateServiceRoleToAccountResponse;
        return this;
    }
    public Object badRequestException;
    public AssociateServiceRoleToAccountResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public AssociateServiceRoleToAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public AssociateServiceRoleToAccountResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public AssociateServiceRoleToAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}