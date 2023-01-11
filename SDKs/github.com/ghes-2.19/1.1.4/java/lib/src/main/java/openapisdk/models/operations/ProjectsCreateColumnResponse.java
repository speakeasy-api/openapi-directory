package openapisdk.models.operations;



public class ProjectsCreateColumnResponse {
    public String contentType;
    public ProjectsCreateColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsCreateColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsCreateColumnResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectColumn projectColumn;
    public ProjectsCreateColumnResponse withProjectColumn(openapisdk.models.shared.ProjectColumn projectColumn) {
        this.projectColumn = projectColumn;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public ProjectsCreateColumnResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}