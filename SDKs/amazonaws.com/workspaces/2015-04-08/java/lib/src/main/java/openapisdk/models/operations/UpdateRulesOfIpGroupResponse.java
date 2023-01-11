package openapisdk.models.operations;



public class UpdateRulesOfIpGroupResponse {
    public Object accessDeniedException;
    public UpdateRulesOfIpGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateRulesOfIpGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public UpdateRulesOfIpGroupResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public UpdateRulesOfIpGroupResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object resourceLimitExceededException;
    public UpdateRulesOfIpGroupResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRulesOfIpGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRulesOfIpGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateRulesOfIpGroupResult;
    public UpdateRulesOfIpGroupResponse withUpdateRulesOfIpGroupResult(java.util.Map<String, Object> updateRulesOfIpGroupResult) {
        this.updateRulesOfIpGroupResult = updateRulesOfIpGroupResult;
        return this;
    }
}