package openapisdk.models.operations;



public class AssociateTeamMemberResponse {
    public openapisdk.models.shared.AssociateTeamMemberResult associateTeamMemberResult;
    public AssociateTeamMemberResponse withAssociateTeamMemberResult(openapisdk.models.shared.AssociateTeamMemberResult associateTeamMemberResult) {
        this.associateTeamMemberResult = associateTeamMemberResult;
        return this;
    }
    public Object concurrentModificationException;
    public AssociateTeamMemberResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AssociateTeamMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidServiceRoleException;
    public AssociateTeamMemberResponse withInvalidServiceRoleException(Object invalidServiceRoleException) {
        this.invalidServiceRoleException = invalidServiceRoleException;
        return this;
    }
    public Object limitExceededException;
    public AssociateTeamMemberResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object projectConfigurationException;
    public AssociateTeamMemberResponse withProjectConfigurationException(Object projectConfigurationException) {
        this.projectConfigurationException = projectConfigurationException;
        return this;
    }
    public Object projectNotFoundException;
    public AssociateTeamMemberResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateTeamMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object teamMemberAlreadyAssociatedException;
    public AssociateTeamMemberResponse withTeamMemberAlreadyAssociatedException(Object teamMemberAlreadyAssociatedException) {
        this.teamMemberAlreadyAssociatedException = teamMemberAlreadyAssociatedException;
        return this;
    }
    public Object validationException;
    public AssociateTeamMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}