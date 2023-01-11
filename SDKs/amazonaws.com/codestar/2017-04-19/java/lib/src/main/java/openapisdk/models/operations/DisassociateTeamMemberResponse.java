package openapisdk.models.operations;



public class DisassociateTeamMemberResponse {
    public Object concurrentModificationException;
    public DisassociateTeamMemberResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DisassociateTeamMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateTeamMemberResult;
    public DisassociateTeamMemberResponse withDisassociateTeamMemberResult(java.util.Map<String, Object> disassociateTeamMemberResult) {
        this.disassociateTeamMemberResult = disassociateTeamMemberResult;
        return this;
    }
    public Object invalidServiceRoleException;
    public DisassociateTeamMemberResponse withInvalidServiceRoleException(Object invalidServiceRoleException) {
        this.invalidServiceRoleException = invalidServiceRoleException;
        return this;
    }
    public Object projectNotFoundException;
    public DisassociateTeamMemberResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateTeamMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DisassociateTeamMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}