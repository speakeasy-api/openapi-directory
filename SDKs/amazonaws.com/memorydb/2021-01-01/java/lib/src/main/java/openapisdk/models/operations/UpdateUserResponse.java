package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateUserResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateUserResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidUserStateFault;
    public UpdateUserResponse withInvalidUserStateFault(Object invalidUserStateFault) {
        this.invalidUserStateFault = invalidUserStateFault;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateUserResponse updateUserResponse;
    public UpdateUserResponse withUpdateUserResponse(openapisdk.models.shared.UpdateUserResponse updateUserResponse) {
        this.updateUserResponse = updateUserResponse;
        return this;
    }
    public Object userNotFoundFault;
    public UpdateUserResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}