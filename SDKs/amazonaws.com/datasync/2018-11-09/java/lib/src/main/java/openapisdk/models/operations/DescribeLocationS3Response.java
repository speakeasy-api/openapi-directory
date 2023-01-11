package openapisdk.models.operations;



public class DescribeLocationS3Response {
    public String contentType;
    public DescribeLocationS3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLocationS3Response describeLocationS3Response;
    public DescribeLocationS3Response withDescribeLocationS3Response(openapisdk.models.shared.DescribeLocationS3Response describeLocationS3Response) {
        this.describeLocationS3Response = describeLocationS3Response;
        return this;
    }
    public Object internalException;
    public DescribeLocationS3Response withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLocationS3Response withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLocationS3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}