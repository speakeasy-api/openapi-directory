package openapisdk.models.operations;



public class InstitutionHrfeedUploadResponse {
    public String contentType;
    public InstitutionHrfeedUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public InstitutionHrfeedUploadResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ResponseMessage responseMessage;
    public InstitutionHrfeedUploadResponse withResponseMessage(openapisdk.models.shared.ResponseMessage responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    public Long statusCode;
    public InstitutionHrfeedUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}