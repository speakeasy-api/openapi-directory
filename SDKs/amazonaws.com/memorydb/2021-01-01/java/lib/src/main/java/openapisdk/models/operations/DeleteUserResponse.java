package openapisdk.models.operations;



public class DeleteUserResponse {
    public String contentType;
    public DeleteUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteUserResponse deleteUserResponse;
    public DeleteUserResponse withDeleteUserResponse(openapisdk.models.shared.DeleteUserResponse deleteUserResponse) {
        this.deleteUserResponse = deleteUserResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteUserResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidUserStateFault;
    public DeleteUserResponse withInvalidUserStateFault(Object invalidUserStateFault) {
        this.invalidUserStateFault = invalidUserStateFault;
        return this;
    }
    public Long statusCode;
    public DeleteUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userNotFoundFault;
    public DeleteUserResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}