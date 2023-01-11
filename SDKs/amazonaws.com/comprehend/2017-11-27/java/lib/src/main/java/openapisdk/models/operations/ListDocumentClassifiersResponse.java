package openapisdk.models.operations;



public class ListDocumentClassifiersResponse {
    public String contentType;
    public ListDocumentClassifiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDocumentClassifiersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListDocumentClassifiersResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListDocumentClassifiersResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDocumentClassifiersResponse listDocumentClassifiersResponse;
    public ListDocumentClassifiersResponse withListDocumentClassifiersResponse(openapisdk.models.shared.ListDocumentClassifiersResponse listDocumentClassifiersResponse) {
        this.listDocumentClassifiersResponse = listDocumentClassifiersResponse;
        return this;
    }
    public Long statusCode;
    public ListDocumentClassifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDocumentClassifiersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}