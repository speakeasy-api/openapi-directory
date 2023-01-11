package openapisdk.models.operations;



public class DescribeFleetResponse {
    public String contentType;
    public DescribeFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetResponse describeFleetResponse;
    public DescribeFleetResponse withDescribeFleetResponse(openapisdk.models.shared.DescribeFleetResponse describeFleetResponse) {
        this.describeFleetResponse = describeFleetResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFleetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeFleetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFleetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}