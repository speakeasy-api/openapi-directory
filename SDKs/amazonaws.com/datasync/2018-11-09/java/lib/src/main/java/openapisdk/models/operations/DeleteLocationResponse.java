package openapisdk.models.operations;



public class DeleteLocationResponse {
    public String contentType;
    public DeleteLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLocationResponse;
    public DeleteLocationResponse withDeleteLocationResponse(java.util.Map<String, Object> deleteLocationResponse) {
        this.deleteLocationResponse = deleteLocationResponse;
        return this;
    }
    public Object internalException;
    public DeleteLocationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteLocationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}