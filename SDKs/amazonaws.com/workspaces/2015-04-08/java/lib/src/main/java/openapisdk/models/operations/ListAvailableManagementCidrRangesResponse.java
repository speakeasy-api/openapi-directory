package openapisdk.models.operations;



public class ListAvailableManagementCidrRangesResponse {
    public Object accessDeniedException;
    public ListAvailableManagementCidrRangesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAvailableManagementCidrRangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ListAvailableManagementCidrRangesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public openapisdk.models.shared.ListAvailableManagementCidrRangesResult listAvailableManagementCidrRangesResult;
    public ListAvailableManagementCidrRangesResponse withListAvailableManagementCidrRangesResult(openapisdk.models.shared.ListAvailableManagementCidrRangesResult listAvailableManagementCidrRangesResult) {
        this.listAvailableManagementCidrRangesResult = listAvailableManagementCidrRangesResult;
        return this;
    }
    public Long statusCode;
    public ListAvailableManagementCidrRangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}