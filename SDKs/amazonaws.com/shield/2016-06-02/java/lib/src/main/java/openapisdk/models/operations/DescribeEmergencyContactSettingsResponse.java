package openapisdk.models.operations;



public class DescribeEmergencyContactSettingsResponse {
    public String contentType;
    public DescribeEmergencyContactSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEmergencyContactSettingsResponse describeEmergencyContactSettingsResponse;
    public DescribeEmergencyContactSettingsResponse withDescribeEmergencyContactSettingsResponse(openapisdk.models.shared.DescribeEmergencyContactSettingsResponse describeEmergencyContactSettingsResponse) {
        this.describeEmergencyContactSettingsResponse = describeEmergencyContactSettingsResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeEmergencyContactSettingsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEmergencyContactSettingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEmergencyContactSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}