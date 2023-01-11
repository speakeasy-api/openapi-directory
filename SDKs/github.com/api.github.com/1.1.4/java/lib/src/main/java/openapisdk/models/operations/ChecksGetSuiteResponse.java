package openapisdk.models.operations;



public class ChecksGetSuiteResponse {
    public String contentType;
    public ChecksGetSuiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChecksGetSuiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckSuite checkSuite;
    public ChecksGetSuiteResponse withCheckSuite(openapisdk.models.shared.CheckSuite checkSuite) {
        this.checkSuite = checkSuite;
        return this;
    }
}