package openapisdk.models.operations;



public class ListGraphsResponse {
    public String contentType;
    public ListGraphsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListGraphsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListGraphsResponse listGraphsResponse;
    public ListGraphsResponse withListGraphsResponse(openapisdk.models.shared.ListGraphsResponse listGraphsResponse) {
        this.listGraphsResponse = listGraphsResponse;
        return this;
    }
    public Long statusCode;
    public ListGraphsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListGraphsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}