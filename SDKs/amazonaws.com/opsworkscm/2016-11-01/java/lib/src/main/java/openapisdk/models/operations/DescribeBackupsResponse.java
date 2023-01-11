package openapisdk.models.operations;



public class DescribeBackupsResponse {
    public String contentType;
    public DescribeBackupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBackupsResponse describeBackupsResponse;
    public DescribeBackupsResponse withDescribeBackupsResponse(openapisdk.models.shared.DescribeBackupsResponse describeBackupsResponse) {
        this.describeBackupsResponse = describeBackupsResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeBackupsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBackupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBackupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeBackupsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}