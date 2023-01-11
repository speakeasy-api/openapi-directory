package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUserResponse createUserResponse;
    public CreateUserResponse withCreateUserResponse(openapisdk.models.shared.CreateUserResponse createUserResponse) {
        this.createUserResponse = createUserResponse;
        return this;
    }
    public Object duplicateUserNameFault;
    public CreateUserResponse withDuplicateUserNameFault(Object duplicateUserNameFault) {
        this.duplicateUserNameFault = duplicateUserNameFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateUserResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateUserResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public CreateUserResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
    public Object userAlreadyExistsFault;
    public CreateUserResponse withUserAlreadyExistsFault(Object userAlreadyExistsFault) {
        this.userAlreadyExistsFault = userAlreadyExistsFault;
        return this;
    }
    public Object userQuotaExceededFault;
    public CreateUserResponse withUserQuotaExceededFault(Object userQuotaExceededFault) {
        this.userQuotaExceededFault = userQuotaExceededFault;
        return this;
    }
}