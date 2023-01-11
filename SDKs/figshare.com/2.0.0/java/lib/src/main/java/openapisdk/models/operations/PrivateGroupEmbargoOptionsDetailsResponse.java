package openapisdk.models.operations;



public class PrivateGroupEmbargoOptionsDetailsResponse {
    public String contentType;
    public PrivateGroupEmbargoOptionsDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateGroupEmbargoOptionsDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.GroupEmbargoOptions[] groupEmbargoOptions;
    public PrivateGroupEmbargoOptionsDetailsResponse withGroupEmbargoOptions(openapisdk.models.shared.GroupEmbargoOptions[] groupEmbargoOptions) {
        this.groupEmbargoOptions = groupEmbargoOptions;
        return this;
    }
    public Long statusCode;
    public PrivateGroupEmbargoOptionsDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}