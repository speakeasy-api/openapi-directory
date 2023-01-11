package openapisdk.models.operations;



public class PrivateProjectNoteResponse {
    public String contentType;
    public PrivateProjectNoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectNoteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ProjectNotePrivate projectNotePrivate;
    public PrivateProjectNoteResponse withProjectNotePrivate(openapisdk.models.shared.ProjectNotePrivate projectNotePrivate) {
        this.projectNotePrivate = projectNotePrivate;
        return this;
    }
    public Long statusCode;
    public PrivateProjectNoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}