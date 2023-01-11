package openapisdk.models.operations;



public class DescribeThingGroupResponse {
    public String contentType;
    public DescribeThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeThingGroupResponse describeThingGroupResponse;
    public DescribeThingGroupResponse withDescribeThingGroupResponse(openapisdk.models.shared.DescribeThingGroupResponse describeThingGroupResponse) {
        this.describeThingGroupResponse = describeThingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeThingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}