package openapisdk.models.operations;



public class UpdateMobileDeviceAccessRuleResponse {
    public String contentType;
    public UpdateMobileDeviceAccessRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateMobileDeviceAccessRuleResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateMobileDeviceAccessRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public UpdateMobileDeviceAccessRuleResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public UpdateMobileDeviceAccessRuleResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public UpdateMobileDeviceAccessRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateMobileDeviceAccessRuleResponse;
    public UpdateMobileDeviceAccessRuleResponse withUpdateMobileDeviceAccessRuleResponse(java.util.Map<String, Object> updateMobileDeviceAccessRuleResponse) {
        this.updateMobileDeviceAccessRuleResponse = updateMobileDeviceAccessRuleResponse;
        return this;
    }
}