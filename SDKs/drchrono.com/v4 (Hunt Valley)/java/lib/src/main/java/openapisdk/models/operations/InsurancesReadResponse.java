package openapisdk.models.operations;



public class InsurancesReadResponse {
    public String contentType;
    public InsurancesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Insurance insurance;
    public InsurancesReadResponse withInsurance(openapisdk.models.shared.Insurance insurance) {
        this.insurance = insurance;
        return this;
    }
    public Long statusCode;
    public InsurancesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}