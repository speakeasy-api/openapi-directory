package openapisdk.models.operations;



public class DescribeImagesResponse {
    public String contentType;
    public DescribeImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImagesResponse describeImagesResponse;
    public DescribeImagesResponse withDescribeImagesResponse(openapisdk.models.shared.DescribeImagesResponse describeImagesResponse) {
        this.describeImagesResponse = describeImagesResponse;
        return this;
    }
    public Object imageNotFoundException;
    public DescribeImagesResponse withImageNotFoundException(Object imageNotFoundException) {
        this.imageNotFoundException = imageNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeImagesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DescribeImagesResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeImagesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}