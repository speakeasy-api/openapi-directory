package openapisdk.models.operations;



public class CreateAclResponse {
    public Object aclAlreadyExistsFault;
    public CreateAclResponse withAclAlreadyExistsFault(Object aclAlreadyExistsFault) {
        this.aclAlreadyExistsFault = aclAlreadyExistsFault;
        return this;
    }
    public Object aclQuotaExceededFault;
    public CreateAclResponse withAclQuotaExceededFault(Object aclQuotaExceededFault) {
        this.aclQuotaExceededFault = aclQuotaExceededFault;
        return this;
    }
    public String contentType;
    public CreateAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAclResponse createACLResponse;
    public CreateAclResponse withCreateAclResponse(openapisdk.models.shared.CreateAclResponse createACLResponse) {
        this.createACLResponse = createACLResponse;
        return this;
    }
    public Object defaultUserRequired;
    public CreateAclResponse withDefaultUserRequired(Object defaultUserRequired) {
        this.defaultUserRequired = defaultUserRequired;
        return this;
    }
    public Object duplicateUserNameFault;
    public CreateAclResponse withDuplicateUserNameFault(Object duplicateUserNameFault) {
        this.duplicateUserNameFault = duplicateUserNameFault;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateAclResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public CreateAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public CreateAclResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
    public Object userNotFoundFault;
    public CreateAclResponse withUserNotFoundFault(Object userNotFoundFault) {
        this.userNotFoundFault = userNotFoundFault;
        return this;
    }
}