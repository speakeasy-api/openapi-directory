package openapisdk.models.operations;



public class DescribeImageTagsResponse {
    public String contentType;
    public DescribeImageTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImageTagsResponse describeImageTagsResponse;
    public DescribeImageTagsResponse withDescribeImageTagsResponse(openapisdk.models.shared.DescribeImageTagsResponse describeImageTagsResponse) {
        this.describeImageTagsResponse = describeImageTagsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeImageTagsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DescribeImageTagsResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeImageTagsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeImageTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}