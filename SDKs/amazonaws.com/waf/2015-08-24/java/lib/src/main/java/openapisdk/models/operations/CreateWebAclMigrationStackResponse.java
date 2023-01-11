package openapisdk.models.operations;



public class CreateWebAclMigrationStackResponse {
    public String contentType;
    public CreateWebAclMigrationStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWebAclMigrationStackResponse createWebACLMigrationStackResponse;
    public CreateWebAclMigrationStackResponse withCreateWebAclMigrationStackResponse(openapisdk.models.shared.CreateWebAclMigrationStackResponse createWebACLMigrationStackResponse) {
        this.createWebACLMigrationStackResponse = createWebACLMigrationStackResponse;
        return this;
    }
    public Long statusCode;
    public CreateWebAclMigrationStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafEntityMigrationException;
    public CreateWebAclMigrationStackResponse withWafEntityMigrationException(Object wafEntityMigrationException) {
        this.wafEntityMigrationException = wafEntityMigrationException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateWebAclMigrationStackResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidOperationException;
    public CreateWebAclMigrationStackResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidParameterException;
    public CreateWebAclMigrationStackResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public CreateWebAclMigrationStackResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}