package openapisdk.models.operations;



public class DescribeConfigurationsResponse {
    public Object authorizationErrorException;
    public DescribeConfigurationsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DescribeConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigurationsResponse describeConfigurationsResponse;
    public DescribeConfigurationsResponse withDescribeConfigurationsResponse(openapisdk.models.shared.DescribeConfigurationsResponse describeConfigurationsResponse) {
        this.describeConfigurationsResponse = describeConfigurationsResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeConfigurationsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeConfigurationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public DescribeConfigurationsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}