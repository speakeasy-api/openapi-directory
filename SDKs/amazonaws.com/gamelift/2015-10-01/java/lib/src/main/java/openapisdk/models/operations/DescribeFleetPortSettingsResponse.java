package openapisdk.models.operations;



public class DescribeFleetPortSettingsResponse {
    public String contentType;
    public DescribeFleetPortSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetPortSettingsOutput describeFleetPortSettingsOutput;
    public DescribeFleetPortSettingsResponse withDescribeFleetPortSettingsOutput(openapisdk.models.shared.DescribeFleetPortSettingsOutput describeFleetPortSettingsOutput) {
        this.describeFleetPortSettingsOutput = describeFleetPortSettingsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetPortSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetPortSettingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetPortSettingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetPortSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetPortSettingsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}