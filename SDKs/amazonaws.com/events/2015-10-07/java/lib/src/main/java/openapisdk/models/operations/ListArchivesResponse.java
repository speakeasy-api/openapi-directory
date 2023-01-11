package openapisdk.models.operations;



public class ListArchivesResponse {
    public String contentType;
    public ListArchivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListArchivesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListArchivesResponse listArchivesResponse;
    public ListArchivesResponse withListArchivesResponse(openapisdk.models.shared.ListArchivesResponse listArchivesResponse) {
        this.listArchivesResponse = listArchivesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListArchivesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListArchivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}