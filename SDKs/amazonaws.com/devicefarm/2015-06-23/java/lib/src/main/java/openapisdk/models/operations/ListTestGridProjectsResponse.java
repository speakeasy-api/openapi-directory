package openapisdk.models.operations;



public class ListTestGridProjectsResponse {
    public Object argumentException;
    public ListTestGridProjectsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListTestGridProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListTestGridProjectsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListTestGridProjectsResult listTestGridProjectsResult;
    public ListTestGridProjectsResponse withListTestGridProjectsResult(openapisdk.models.shared.ListTestGridProjectsResult listTestGridProjectsResult) {
        this.listTestGridProjectsResult = listTestGridProjectsResult;
        return this;
    }
    public Long statusCode;
    public ListTestGridProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}