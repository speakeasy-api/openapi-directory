package openapisdk.models.operations;



public class DeleteMobileDeviceAccessRuleResponse {
    public String contentType;
    public DeleteMobileDeviceAccessRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMobileDeviceAccessRuleResponse;
    public DeleteMobileDeviceAccessRuleResponse withDeleteMobileDeviceAccessRuleResponse(java.util.Map<String, Object> deleteMobileDeviceAccessRuleResponse) {
        this.deleteMobileDeviceAccessRuleResponse = deleteMobileDeviceAccessRuleResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteMobileDeviceAccessRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteMobileDeviceAccessRuleResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteMobileDeviceAccessRuleResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteMobileDeviceAccessRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}