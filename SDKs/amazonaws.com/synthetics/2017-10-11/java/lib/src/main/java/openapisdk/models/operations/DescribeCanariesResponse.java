package openapisdk.models.operations;



public class DescribeCanariesResponse {
    public String contentType;
    public DescribeCanariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCanariesResponse describeCanariesResponse;
    public DescribeCanariesResponse withDescribeCanariesResponse(openapisdk.models.shared.DescribeCanariesResponse describeCanariesResponse) {
        this.describeCanariesResponse = describeCanariesResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeCanariesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeCanariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeCanariesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}