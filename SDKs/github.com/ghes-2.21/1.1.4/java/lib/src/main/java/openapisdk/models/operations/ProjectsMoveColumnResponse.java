package openapisdk.models.operations;



public class ProjectsMoveColumnResponse {
    public String contentType;
    public ProjectsMoveColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsMoveColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsMoveColumnResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public java.util.Map<String, Object> projectsMoveColumn201ApplicationJSONObject;
    public ProjectsMoveColumnResponse withProjectsMoveColumn201ApplicationJsonObject(java.util.Map<String, Object> projectsMoveColumn201ApplicationJSONObject) {
        this.projectsMoveColumn201ApplicationJSONObject = projectsMoveColumn201ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public ProjectsMoveColumnResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}