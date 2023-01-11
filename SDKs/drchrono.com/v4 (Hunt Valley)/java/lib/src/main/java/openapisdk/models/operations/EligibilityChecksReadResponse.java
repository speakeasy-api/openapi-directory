package openapisdk.models.operations;



public class EligibilityChecksReadResponse {
    public String contentType;
    public EligibilityChecksReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Coverage coverage;
    public EligibilityChecksReadResponse withCoverage(openapisdk.models.shared.Coverage coverage) {
        this.coverage = coverage;
        return this;
    }
    public Long statusCode;
    public EligibilityChecksReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}