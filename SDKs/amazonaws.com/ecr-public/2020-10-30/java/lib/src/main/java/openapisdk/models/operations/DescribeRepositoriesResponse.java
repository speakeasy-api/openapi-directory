package openapisdk.models.operations;



public class DescribeRepositoriesResponse {
    public String contentType;
    public DescribeRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRepositoriesResponse describeRepositoriesResponse;
    public DescribeRepositoriesResponse withDescribeRepositoriesResponse(openapisdk.models.shared.DescribeRepositoriesResponse describeRepositoriesResponse) {
        this.describeRepositoriesResponse = describeRepositoriesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeRepositoriesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DescribeRepositoriesResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeRepositoriesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}