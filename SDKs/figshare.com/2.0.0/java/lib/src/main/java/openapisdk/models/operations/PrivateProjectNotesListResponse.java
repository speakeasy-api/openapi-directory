package openapisdk.models.operations;



public class PrivateProjectNotesListResponse {
    public String contentType;
    public PrivateProjectNotesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectNotesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ProjectNote[] projectNotes;
    public PrivateProjectNotesListResponse withProjectNotes(openapisdk.models.shared.ProjectNote[] projectNotes) {
        this.projectNotes = projectNotes;
        return this;
    }
    public Long statusCode;
    public PrivateProjectNotesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}