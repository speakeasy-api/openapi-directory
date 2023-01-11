package openapisdk.models.operations;



public class AppsCreateFromManifestResponse {
    public String contentType;
    public AppsCreateFromManifestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> gitHubApp;
    public AppsCreateFromManifestResponse withGitHubApp(java.util.Map<String, Object> gitHubApp) {
        this.gitHubApp = gitHubApp;
        return this;
    }
    public Long statusCode;
    public AppsCreateFromManifestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsCreateFromManifestResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public AppsCreateFromManifestResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}