package openapisdk.models.operations;



public class ChecksCreateSuiteResponse {
    public String contentType;
    public ChecksCreateSuiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChecksCreateSuiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckSuite checkSuite;
    public ChecksCreateSuiteResponse withCheckSuite(openapisdk.models.shared.CheckSuite checkSuite) {
        this.checkSuite = checkSuite;
        return this;
    }
}