package openapisdk.models.operations;



public class ScanResponse {
    public String contentType;
    public ScanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ScanResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public ScanResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object requestLimitExceeded;
    public ScanResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public ScanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ScanOutput scanOutput;
    public ScanResponse withScanOutput(openapisdk.models.shared.ScanOutput scanOutput) {
        this.scanOutput = scanOutput;
        return this;
    }
    public Long statusCode;
    public ScanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}