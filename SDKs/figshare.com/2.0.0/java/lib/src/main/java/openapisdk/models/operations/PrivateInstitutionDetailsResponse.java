package openapisdk.models.operations;



public class PrivateInstitutionDetailsResponse {
    public String contentType;
    public PrivateInstitutionDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.Institution institution;
    public PrivateInstitutionDetailsResponse withInstitution(openapisdk.models.shared.Institution institution) {
        this.institution = institution;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}