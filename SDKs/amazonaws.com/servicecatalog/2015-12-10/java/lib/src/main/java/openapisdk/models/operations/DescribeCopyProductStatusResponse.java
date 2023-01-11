package openapisdk.models.operations;



public class DescribeCopyProductStatusResponse {
    public String contentType;
    public DescribeCopyProductStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCopyProductStatusOutput describeCopyProductStatusOutput;
    public DescribeCopyProductStatusResponse withDescribeCopyProductStatusOutput(openapisdk.models.shared.DescribeCopyProductStatusOutput describeCopyProductStatusOutput) {
        this.describeCopyProductStatusOutput = describeCopyProductStatusOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCopyProductStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCopyProductStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}