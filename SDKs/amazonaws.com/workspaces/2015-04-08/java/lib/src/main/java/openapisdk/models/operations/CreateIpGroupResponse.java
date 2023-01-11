package openapisdk.models.operations;



public class CreateIpGroupResponse {
    public Object accessDeniedException;
    public CreateIpGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateIpGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateIpGroupResult createIpGroupResult;
    public CreateIpGroupResponse withCreateIpGroupResult(openapisdk.models.shared.CreateIpGroupResult createIpGroupResult) {
        this.createIpGroupResult = createIpGroupResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public CreateIpGroupResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateIpGroupResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceCreationFailedException;
    public CreateIpGroupResponse withResourceCreationFailedException(Object resourceCreationFailedException) {
        this.resourceCreationFailedException = resourceCreationFailedException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateIpGroupResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateIpGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}