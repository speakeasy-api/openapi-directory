package openapisdk.models.operations;



public class DescribeAgentsResponse {
    public Object authorizationErrorException;
    public DescribeAgentsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DescribeAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAgentsResponse describeAgentsResponse;
    public DescribeAgentsResponse withDescribeAgentsResponse(openapisdk.models.shared.DescribeAgentsResponse describeAgentsResponse) {
        this.describeAgentsResponse = describeAgentsResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeAgentsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeAgentsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeAgentsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public DescribeAgentsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}