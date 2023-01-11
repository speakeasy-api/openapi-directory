package openapisdk.models.operations;



public class ListUpdatesResponse {
    public Object clientException;
    public ListUpdatesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListUpdatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListUpdatesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListUpdatesResponse listUpdatesResponse;
    public ListUpdatesResponse withListUpdatesResponse(openapisdk.models.shared.ListUpdatesResponse listUpdatesResponse) {
        this.listUpdatesResponse = listUpdatesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListUpdatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public ListUpdatesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListUpdatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}