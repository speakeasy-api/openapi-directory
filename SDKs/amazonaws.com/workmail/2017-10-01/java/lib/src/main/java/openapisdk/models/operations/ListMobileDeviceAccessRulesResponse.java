package openapisdk.models.operations;



public class ListMobileDeviceAccessRulesResponse {
    public String contentType;
    public ListMobileDeviceAccessRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListMobileDeviceAccessRulesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListMobileDeviceAccessRulesResponse listMobileDeviceAccessRulesResponse;
    public ListMobileDeviceAccessRulesResponse withListMobileDeviceAccessRulesResponse(openapisdk.models.shared.ListMobileDeviceAccessRulesResponse listMobileDeviceAccessRulesResponse) {
        this.listMobileDeviceAccessRulesResponse = listMobileDeviceAccessRulesResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListMobileDeviceAccessRulesResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListMobileDeviceAccessRulesResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListMobileDeviceAccessRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}