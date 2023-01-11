package openapisdk.models.operations;



public class CreateMobileDeviceAccessRuleResponse {
    public String contentType;
    public CreateMobileDeviceAccessRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMobileDeviceAccessRuleResponse createMobileDeviceAccessRuleResponse;
    public CreateMobileDeviceAccessRuleResponse withCreateMobileDeviceAccessRuleResponse(openapisdk.models.shared.CreateMobileDeviceAccessRuleResponse createMobileDeviceAccessRuleResponse) {
        this.createMobileDeviceAccessRuleResponse = createMobileDeviceAccessRuleResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateMobileDeviceAccessRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateMobileDeviceAccessRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object organizationNotFoundException;
    public CreateMobileDeviceAccessRuleResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public CreateMobileDeviceAccessRuleResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public CreateMobileDeviceAccessRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}