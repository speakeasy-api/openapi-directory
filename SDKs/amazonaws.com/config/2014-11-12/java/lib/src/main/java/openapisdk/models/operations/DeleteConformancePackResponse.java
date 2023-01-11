package openapisdk.models.operations;



public class DeleteConformancePackResponse {
    public String contentType;
    public DeleteConformancePackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchConformancePackException;
    public DeleteConformancePackResponse withNoSuchConformancePackException(Object noSuchConformancePackException) {
        this.noSuchConformancePackException = noSuchConformancePackException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteConformancePackResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteConformancePackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}