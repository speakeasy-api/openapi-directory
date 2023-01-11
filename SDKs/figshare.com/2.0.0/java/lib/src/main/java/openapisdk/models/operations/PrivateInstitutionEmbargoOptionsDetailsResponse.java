package openapisdk.models.operations;



public class PrivateInstitutionEmbargoOptionsDetailsResponse {
    public String contentType;
    public PrivateInstitutionEmbargoOptionsDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionEmbargoOptionsDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.GroupEmbargoOptions[] groupEmbargoOptions;
    public PrivateInstitutionEmbargoOptionsDetailsResponse withGroupEmbargoOptions(openapisdk.models.shared.GroupEmbargoOptions[] groupEmbargoOptions) {
        this.groupEmbargoOptions = groupEmbargoOptions;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionEmbargoOptionsDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}