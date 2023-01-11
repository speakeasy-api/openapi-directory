package openapisdk.models.operations;



public class UpdateParameterGroupResponse {
    public String contentType;
    public UpdateParameterGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateParameterGroupResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterGroupStateFault;
    public UpdateParameterGroupResponse withInvalidParameterGroupStateFault(Object invalidParameterGroupStateFault) {
        this.invalidParameterGroupStateFault = invalidParameterGroupStateFault;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateParameterGroupResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public UpdateParameterGroupResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public UpdateParameterGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public UpdateParameterGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateParameterGroupResponse updateParameterGroupResponse;
    public UpdateParameterGroupResponse withUpdateParameterGroupResponse(openapisdk.models.shared.UpdateParameterGroupResponse updateParameterGroupResponse) {
        this.updateParameterGroupResponse = updateParameterGroupResponse;
        return this;
    }
}