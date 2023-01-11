package openapisdk.models.operations;



public class ResetParameterGroupResponse {
    public String contentType;
    public ResetParameterGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterCombinationException;
    public ResetParameterGroupResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterGroupStateFault;
    public ResetParameterGroupResponse withInvalidParameterGroupStateFault(Object invalidParameterGroupStateFault) {
        this.invalidParameterGroupStateFault = invalidParameterGroupStateFault;
        return this;
    }
    public Object invalidParameterValueException;
    public ResetParameterGroupResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public ResetParameterGroupResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public openapisdk.models.shared.ResetParameterGroupResponse resetParameterGroupResponse;
    public ResetParameterGroupResponse withResetParameterGroupResponse(openapisdk.models.shared.ResetParameterGroupResponse resetParameterGroupResponse) {
        this.resetParameterGroupResponse = resetParameterGroupResponse;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public ResetParameterGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ResetParameterGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}