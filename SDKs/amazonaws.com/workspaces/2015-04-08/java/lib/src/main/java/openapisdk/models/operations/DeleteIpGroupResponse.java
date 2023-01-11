package openapisdk.models.operations;



public class DeleteIpGroupResponse {
    public Object accessDeniedException;
    public DeleteIpGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteIpGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteIpGroupResult;
    public DeleteIpGroupResponse withDeleteIpGroupResult(java.util.Map<String, Object> deleteIpGroupResult) {
        this.deleteIpGroupResult = deleteIpGroupResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DeleteIpGroupResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceAssociatedException;
    public DeleteIpGroupResponse withResourceAssociatedException(Object resourceAssociatedException) {
        this.resourceAssociatedException = resourceAssociatedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteIpGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteIpGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}