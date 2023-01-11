package openapisdk.models.operations;



public class DescribeImageScanFindingsResponse {
    public String contentType;
    public DescribeImageScanFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImageScanFindingsResponse describeImageScanFindingsResponse;
    public DescribeImageScanFindingsResponse withDescribeImageScanFindingsResponse(openapisdk.models.shared.DescribeImageScanFindingsResponse describeImageScanFindingsResponse) {
        this.describeImageScanFindingsResponse = describeImageScanFindingsResponse;
        return this;
    }
    public Object imageNotFoundException;
    public DescribeImageScanFindingsResponse withImageNotFoundException(Object imageNotFoundException) {
        this.imageNotFoundException = imageNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeImageScanFindingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DescribeImageScanFindingsResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object scanNotFoundException;
    public DescribeImageScanFindingsResponse withScanNotFoundException(Object scanNotFoundException) {
        this.scanNotFoundException = scanNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeImageScanFindingsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeImageScanFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}