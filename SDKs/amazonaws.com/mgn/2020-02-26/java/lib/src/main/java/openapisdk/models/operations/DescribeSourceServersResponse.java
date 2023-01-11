package openapisdk.models.operations;



public class DescribeSourceServersResponse {
    public String contentType;
    public DescribeSourceServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSourceServersResponse describeSourceServersResponse;
    public DescribeSourceServersResponse withDescribeSourceServersResponse(openapisdk.models.shared.DescribeSourceServersResponse describeSourceServersResponse) {
        this.describeSourceServersResponse = describeSourceServersResponse;
        return this;
    }
    public Long statusCode;
    public DescribeSourceServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DescribeSourceServersResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public DescribeSourceServersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}