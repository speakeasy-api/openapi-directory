package openapisdk.models.operations;



public class LicensesListResponse {
    public String contentType;
    public LicensesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.License[] licenses;
    public LicensesListResponse withLicenses(openapisdk.models.shared.License[] licenses) {
        this.licenses = licenses;
        return this;
    }
    public Long statusCode;
    public LicensesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}