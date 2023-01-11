package openapisdk.models.operations;



public class DescribeUserProfileResponse {
    public String contentType;
    public DescribeUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserProfileResult describeUserProfileResult;
    public DescribeUserProfileResponse withDescribeUserProfileResult(openapisdk.models.shared.DescribeUserProfileResult describeUserProfileResult) {
        this.describeUserProfileResult = describeUserProfileResult;
        return this;
    }
    public Long statusCode;
    public DescribeUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userProfileNotFoundException;
    public DescribeUserProfileResponse withUserProfileNotFoundException(Object userProfileNotFoundException) {
        this.userProfileNotFoundException = userProfileNotFoundException;
        return this;
    }
    public Object validationException;
    public DescribeUserProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}