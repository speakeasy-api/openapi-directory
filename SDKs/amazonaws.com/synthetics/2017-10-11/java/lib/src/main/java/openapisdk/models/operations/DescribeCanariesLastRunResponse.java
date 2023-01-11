package openapisdk.models.operations;



public class DescribeCanariesLastRunResponse {
    public String contentType;
    public DescribeCanariesLastRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCanariesLastRunResponse describeCanariesLastRunResponse;
    public DescribeCanariesLastRunResponse withDescribeCanariesLastRunResponse(openapisdk.models.shared.DescribeCanariesLastRunResponse describeCanariesLastRunResponse) {
        this.describeCanariesLastRunResponse = describeCanariesLastRunResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeCanariesLastRunResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeCanariesLastRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeCanariesLastRunResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}