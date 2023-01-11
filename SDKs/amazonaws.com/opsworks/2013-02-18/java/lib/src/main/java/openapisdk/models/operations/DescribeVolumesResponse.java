package openapisdk.models.operations;



public class DescribeVolumesResponse {
    public String contentType;
    public DescribeVolumesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVolumesResult describeVolumesResult;
    public DescribeVolumesResponse withDescribeVolumesResult(openapisdk.models.shared.DescribeVolumesResult describeVolumesResult) {
        this.describeVolumesResult = describeVolumesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeVolumesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeVolumesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeVolumesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}