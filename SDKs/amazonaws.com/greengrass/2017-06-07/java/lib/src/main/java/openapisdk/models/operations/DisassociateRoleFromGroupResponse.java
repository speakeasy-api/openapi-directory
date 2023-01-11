package openapisdk.models.operations;



public class DisassociateRoleFromGroupResponse {
    public Object badRequestException;
    public DisassociateRoleFromGroupResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DisassociateRoleFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateRoleFromGroupResponse disassociateRoleFromGroupResponse;
    public DisassociateRoleFromGroupResponse withDisassociateRoleFromGroupResponse(openapisdk.models.shared.DisassociateRoleFromGroupResponse disassociateRoleFromGroupResponse) {
        this.disassociateRoleFromGroupResponse = disassociateRoleFromGroupResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DisassociateRoleFromGroupResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public DisassociateRoleFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}