package openapisdk.models.operations;



public class ReposCreateForkResponse {
    public String contentType;
    public ReposCreateForkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreateForkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateForkResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Repository repository;
    public ReposCreateForkResponse withRepository(openapisdk.models.shared.Repository repository) {
        this.repository = repository;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public ReposCreateForkResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateForkResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}