package openapisdk.models.operations;



public class UpdateTeamMemberResponse {
    public Object concurrentModificationException;
    public UpdateTeamMemberResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateTeamMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidServiceRoleException;
    public UpdateTeamMemberResponse withInvalidServiceRoleException(Object invalidServiceRoleException) {
        this.invalidServiceRoleException = invalidServiceRoleException;
        return this;
    }
    public Object limitExceededException;
    public UpdateTeamMemberResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object projectConfigurationException;
    public UpdateTeamMemberResponse withProjectConfigurationException(Object projectConfigurationException) {
        this.projectConfigurationException = projectConfigurationException;
        return this;
    }
    public Object projectNotFoundException;
    public UpdateTeamMemberResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTeamMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object teamMemberNotFoundException;
    public UpdateTeamMemberResponse withTeamMemberNotFoundException(Object teamMemberNotFoundException) {
        this.teamMemberNotFoundException = teamMemberNotFoundException;
        return this;
    }
    public openapisdk.models.shared.UpdateTeamMemberResult updateTeamMemberResult;
    public UpdateTeamMemberResponse withUpdateTeamMemberResult(openapisdk.models.shared.UpdateTeamMemberResult updateTeamMemberResult) {
        this.updateTeamMemberResult = updateTeamMemberResult;
        return this;
    }
    public Object validationException;
    public UpdateTeamMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}