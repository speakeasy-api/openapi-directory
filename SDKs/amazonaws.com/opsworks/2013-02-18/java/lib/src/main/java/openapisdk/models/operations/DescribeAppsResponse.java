package openapisdk.models.operations;



public class DescribeAppsResponse {
    public String contentType;
    public DescribeAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAppsResult describeAppsResult;
    public DescribeAppsResponse withDescribeAppsResult(openapisdk.models.shared.DescribeAppsResult describeAppsResult) {
        this.describeAppsResult = describeAppsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAppsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeAppsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}