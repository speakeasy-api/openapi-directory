package openapisdk.models.operations;



public class DescribeUserProfilesResponse {
    public String contentType;
    public DescribeUserProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserProfilesResult describeUserProfilesResult;
    public DescribeUserProfilesResponse withDescribeUserProfilesResult(openapisdk.models.shared.DescribeUserProfilesResult describeUserProfilesResult) {
        this.describeUserProfilesResult = describeUserProfilesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUserProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUserProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeUserProfilesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}