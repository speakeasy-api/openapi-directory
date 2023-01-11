package openapisdk.models.operations;



public class PrivateLicensesListResponse {
    public String contentType;
    public PrivateLicensesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateLicensesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.License[] licenses;
    public PrivateLicensesListResponse withLicenses(openapisdk.models.shared.License[] licenses) {
        this.licenses = licenses;
        return this;
    }
    public Long statusCode;
    public PrivateLicensesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}