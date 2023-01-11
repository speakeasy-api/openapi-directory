package openapisdk.models.operations;



public class ListResourcesResponse {
    public String contentType;
    public ListResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResourcesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListResourcesResult listResourcesResult;
    public ListResourcesResponse withListResourcesResult(openapisdk.models.shared.ListResourcesResult listResourcesResult) {
        this.listResourcesResult = listResourcesResult;
        return this;
    }
    public Object projectNotFoundException;
    public ListResourcesResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}