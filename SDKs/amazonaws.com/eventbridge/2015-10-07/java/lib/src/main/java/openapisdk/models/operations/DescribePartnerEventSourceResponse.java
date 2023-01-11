package openapisdk.models.operations;



public class DescribePartnerEventSourceResponse {
    public String contentType;
    public DescribePartnerEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePartnerEventSourceResponse describePartnerEventSourceResponse;
    public DescribePartnerEventSourceResponse withDescribePartnerEventSourceResponse(openapisdk.models.shared.DescribePartnerEventSourceResponse describePartnerEventSourceResponse) {
        this.describePartnerEventSourceResponse = describePartnerEventSourceResponse;
        return this;
    }
    public Object internalException;
    public DescribePartnerEventSourceResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object operationDisabledException;
    public DescribePartnerEventSourceResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePartnerEventSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePartnerEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}