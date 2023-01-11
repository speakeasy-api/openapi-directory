package openapisdk.models.operations;



public class ListAliasesResponse {
    public String contentType;
    public ListAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ListAliasesResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public ListAliasesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidMarkerException;
    public ListAliasesResponse withInvalidMarkerException(Object invalidMarkerException) {
        this.invalidMarkerException = invalidMarkerException;
        return this;
    }
    public Object kmsInternalException;
    public ListAliasesResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public openapisdk.models.shared.ListAliasesResponse listAliasesResponse;
    public ListAliasesResponse withListAliasesResponse(openapisdk.models.shared.ListAliasesResponse listAliasesResponse) {
        this.listAliasesResponse = listAliasesResponse;
        return this;
    }
    public Object notFoundException;
    public ListAliasesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}