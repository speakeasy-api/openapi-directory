package openapisdk.models.operations;



public class DescribeMyUserProfileResponse {
    public String contentType;
    public DescribeMyUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMyUserProfileResult describeMyUserProfileResult;
    public DescribeMyUserProfileResponse withDescribeMyUserProfileResult(openapisdk.models.shared.DescribeMyUserProfileResult describeMyUserProfileResult) {
        this.describeMyUserProfileResult = describeMyUserProfileResult;
        return this;
    }
    public Long statusCode;
    public DescribeMyUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}