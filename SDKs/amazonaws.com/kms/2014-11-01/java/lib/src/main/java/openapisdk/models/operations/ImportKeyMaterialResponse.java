package openapisdk.models.operations;



public class ImportKeyMaterialResponse {
    public String contentType;
    public ImportKeyMaterialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ImportKeyMaterialResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object expiredImportTokenException;
    public ImportKeyMaterialResponse withExpiredImportTokenException(Object expiredImportTokenException) {
        this.expiredImportTokenException = expiredImportTokenException;
        return this;
    }
    public java.util.Map<String, Object> importKeyMaterialResponse;
    public ImportKeyMaterialResponse withImportKeyMaterialResponse(java.util.Map<String, Object> importKeyMaterialResponse) {
        this.importKeyMaterialResponse = importKeyMaterialResponse;
        return this;
    }
    public Object incorrectKeyMaterialException;
    public ImportKeyMaterialResponse withIncorrectKeyMaterialException(Object incorrectKeyMaterialException) {
        this.incorrectKeyMaterialException = incorrectKeyMaterialException;
        return this;
    }
    public Object invalidArnException;
    public ImportKeyMaterialResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidCiphertextException;
    public ImportKeyMaterialResponse withInvalidCiphertextException(Object invalidCiphertextException) {
        this.invalidCiphertextException = invalidCiphertextException;
        return this;
    }
    public Object invalidImportTokenException;
    public ImportKeyMaterialResponse withInvalidImportTokenException(Object invalidImportTokenException) {
        this.invalidImportTokenException = invalidImportTokenException;
        return this;
    }
    public Object kmsInternalException;
    public ImportKeyMaterialResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public ImportKeyMaterialResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public ImportKeyMaterialResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ImportKeyMaterialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ImportKeyMaterialResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}