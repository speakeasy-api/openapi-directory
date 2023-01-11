package openapisdk.models.operations;



public class DescribeJobResponse {
    public String contentType;
    public DescribeJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobResult describeJobResult;
    public DescribeJobResponse withDescribeJobResult(openapisdk.models.shared.DescribeJobResult describeJobResult) {
        this.describeJobResult = describeJobResult;
        return this;
    }
    public Object invalidResourceException;
    public DescribeJobResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public DescribeJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}