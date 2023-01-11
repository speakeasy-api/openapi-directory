package openapisdk.models.operations;



public class DisassociateIpGroupsResponse {
    public Object accessDeniedException;
    public DisassociateIpGroupsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateIpGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateIpGroupsResult;
    public DisassociateIpGroupsResponse withDisassociateIpGroupsResult(java.util.Map<String, Object> disassociateIpGroupsResult) {
        this.disassociateIpGroupsResult = disassociateIpGroupsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DisassociateIpGroupsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public DisassociateIpGroupsResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateIpGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateIpGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}