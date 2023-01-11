package openapisdk.models.operations;



public class DescribeExportConfigurationsResponse {
    public Object authorizationErrorException;
    public DescribeExportConfigurationsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DescribeExportConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeExportConfigurationsResponse describeExportConfigurationsResponse;
    public DescribeExportConfigurationsResponse withDescribeExportConfigurationsResponse(openapisdk.models.shared.DescribeExportConfigurationsResponse describeExportConfigurationsResponse) {
        this.describeExportConfigurationsResponse = describeExportConfigurationsResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeExportConfigurationsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeExportConfigurationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeExportConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeExportConfigurationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalErrorException;
    public DescribeExportConfigurationsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeExportConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}