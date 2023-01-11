package openapisdk.models.operations;



public class ListTeamMembersResponse {
    public String contentType;
    public ListTeamMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListTeamMembersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListTeamMembersResult listTeamMembersResult;
    public ListTeamMembersResponse withListTeamMembersResult(openapisdk.models.shared.ListTeamMembersResult listTeamMembersResult) {
        this.listTeamMembersResult = listTeamMembersResult;
        return this;
    }
    public Object projectNotFoundException;
    public ListTeamMembersResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTeamMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTeamMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}