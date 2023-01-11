package openapisdk.models.operations;



public class GetEncryptionConfigResponse {
    public String contentType;
    public GetEncryptionConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEncryptionConfigResult getEncryptionConfigResult;
    public GetEncryptionConfigResponse withGetEncryptionConfigResult(openapisdk.models.shared.GetEncryptionConfigResult getEncryptionConfigResult) {
        this.getEncryptionConfigResult = getEncryptionConfigResult;
        return this;
    }
    public Object invalidRequestException;
    public GetEncryptionConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetEncryptionConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetEncryptionConfigResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}