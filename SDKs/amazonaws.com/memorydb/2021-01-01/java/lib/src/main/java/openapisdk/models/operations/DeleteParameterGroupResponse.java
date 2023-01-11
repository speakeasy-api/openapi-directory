package openapisdk.models.operations;



public class DeleteParameterGroupResponse {
    public String contentType;
    public DeleteParameterGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteParameterGroupResponse deleteParameterGroupResponse;
    public DeleteParameterGroupResponse withDeleteParameterGroupResponse(openapisdk.models.shared.DeleteParameterGroupResponse deleteParameterGroupResponse) {
        this.deleteParameterGroupResponse = deleteParameterGroupResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DeleteParameterGroupResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterGroupStateFault;
    public DeleteParameterGroupResponse withInvalidParameterGroupStateFault(Object invalidParameterGroupStateFault) {
        this.invalidParameterGroupStateFault = invalidParameterGroupStateFault;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteParameterGroupResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public DeleteParameterGroupResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DeleteParameterGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteParameterGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}