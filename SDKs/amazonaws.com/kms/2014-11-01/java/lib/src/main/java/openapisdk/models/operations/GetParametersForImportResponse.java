package openapisdk.models.operations;



public class GetParametersForImportResponse {
    public String contentType;
    public GetParametersForImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GetParametersForImportResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetParametersForImportResponse getParametersForImportResponse;
    public GetParametersForImportResponse withGetParametersForImportResponse(openapisdk.models.shared.GetParametersForImportResponse getParametersForImportResponse) {
        this.getParametersForImportResponse = getParametersForImportResponse;
        return this;
    }
    public Object invalidArnException;
    public GetParametersForImportResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public GetParametersForImportResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GetParametersForImportResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public GetParametersForImportResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetParametersForImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public GetParametersForImportResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}