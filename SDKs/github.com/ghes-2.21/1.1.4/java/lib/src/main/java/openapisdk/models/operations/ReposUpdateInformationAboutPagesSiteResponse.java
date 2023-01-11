package openapisdk.models.operations;



public class ReposUpdateInformationAboutPagesSiteResponse {
    public String contentType;
    public ReposUpdateInformationAboutPagesSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateInformationAboutPagesSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposUpdateInformationAboutPagesSiteResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ReposUpdateInformationAboutPagesSiteResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposUpdateInformationAboutPagesSiteResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}