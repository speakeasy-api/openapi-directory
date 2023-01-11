package openapisdk.models.operations;



public class ListItemsResponse {
    public Object containerNotFoundException;
    public ListItemsResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public ListItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListItemsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.ListItemsResponse listItemsResponse;
    public ListItemsResponse withListItemsResponse(openapisdk.models.shared.ListItemsResponse listItemsResponse) {
        this.listItemsResponse = listItemsResponse;
        return this;
    }
    public Long statusCode;
    public ListItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}