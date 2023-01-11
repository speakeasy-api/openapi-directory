package openapisdk.models.operations;



public class PutEncryptionConfigResponse {
    public String contentType;
    public PutEncryptionConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public PutEncryptionConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PutEncryptionConfigResult putEncryptionConfigResult;
    public PutEncryptionConfigResponse withPutEncryptionConfigResult(openapisdk.models.shared.PutEncryptionConfigResult putEncryptionConfigResult) {
        this.putEncryptionConfigResult = putEncryptionConfigResult;
        return this;
    }
    public Long statusCode;
    public PutEncryptionConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public PutEncryptionConfigResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}