package openapisdk.models.operations;



public class DescribeJobsResponse {
    public String contentType;
    public DescribeJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobsResponse describeJobsResponse;
    public DescribeJobsResponse withDescribeJobsResponse(openapisdk.models.shared.DescribeJobsResponse describeJobsResponse) {
        this.describeJobsResponse = describeJobsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DescribeJobsResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public DescribeJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}