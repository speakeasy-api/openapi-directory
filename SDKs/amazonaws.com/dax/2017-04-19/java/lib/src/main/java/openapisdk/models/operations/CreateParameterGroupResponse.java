package openapisdk.models.operations;



public class CreateParameterGroupResponse {
    public String contentType;
    public CreateParameterGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateParameterGroupResponse createParameterGroupResponse;
    public CreateParameterGroupResponse withCreateParameterGroupResponse(openapisdk.models.shared.CreateParameterGroupResponse createParameterGroupResponse) {
        this.createParameterGroupResponse = createParameterGroupResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateParameterGroupResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterGroupStateFault;
    public CreateParameterGroupResponse withInvalidParameterGroupStateFault(Object invalidParameterGroupStateFault) {
        this.invalidParameterGroupStateFault = invalidParameterGroupStateFault;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateParameterGroupResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupAlreadyExistsFault;
    public CreateParameterGroupResponse withParameterGroupAlreadyExistsFault(Object parameterGroupAlreadyExistsFault) {
        this.parameterGroupAlreadyExistsFault = parameterGroupAlreadyExistsFault;
        return this;
    }
    public Object parameterGroupQuotaExceededFault;
    public CreateParameterGroupResponse withParameterGroupQuotaExceededFault(Object parameterGroupQuotaExceededFault) {
        this.parameterGroupQuotaExceededFault = parameterGroupQuotaExceededFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public CreateParameterGroupResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public CreateParameterGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}