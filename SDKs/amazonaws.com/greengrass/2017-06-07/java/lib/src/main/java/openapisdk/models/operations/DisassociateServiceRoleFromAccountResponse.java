package openapisdk.models.operations;



public class DisassociateServiceRoleFromAccountResponse {
    public String contentType;
    public DisassociateServiceRoleFromAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateServiceRoleFromAccountResponse disassociateServiceRoleFromAccountResponse;
    public DisassociateServiceRoleFromAccountResponse withDisassociateServiceRoleFromAccountResponse(openapisdk.models.shared.DisassociateServiceRoleFromAccountResponse disassociateServiceRoleFromAccountResponse) {
        this.disassociateServiceRoleFromAccountResponse = disassociateServiceRoleFromAccountResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DisassociateServiceRoleFromAccountResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public DisassociateServiceRoleFromAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}