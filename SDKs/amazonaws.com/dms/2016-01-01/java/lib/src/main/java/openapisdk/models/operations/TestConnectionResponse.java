package openapisdk.models.operations;



public class TestConnectionResponse {
    public Object accessDeniedFault;
    public TestConnectionResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public TestConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public TestConnectionResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public TestConnectionResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public TestConnectionResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public TestConnectionResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public TestConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestConnectionResponse testConnectionResponse;
    public TestConnectionResponse withTestConnectionResponse(openapisdk.models.shared.TestConnectionResponse testConnectionResponse) {
        this.testConnectionResponse = testConnectionResponse;
        return this;
    }
}