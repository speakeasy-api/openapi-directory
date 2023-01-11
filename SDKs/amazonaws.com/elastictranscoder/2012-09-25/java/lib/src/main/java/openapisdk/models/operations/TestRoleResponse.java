package openapisdk.models.operations;



public class TestRoleResponse {
    public Object accessDeniedException;
    public TestRoleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public TestRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public TestRoleResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public TestRoleResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public TestRoleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public TestRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestRoleResponse testRoleResponse;
    public TestRoleResponse withTestRoleResponse(openapisdk.models.shared.TestRoleResponse testRoleResponse) {
        this.testRoleResponse = testRoleResponse;
        return this;
    }
    public Object validationException;
    public TestRoleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}