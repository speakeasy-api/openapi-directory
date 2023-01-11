package openapisdk.models.operations;



public class ListEventTrackersResponse {
    public String contentType;
    public ListEventTrackersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListEventTrackersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListEventTrackersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListEventTrackersResponse listEventTrackersResponse;
    public ListEventTrackersResponse withListEventTrackersResponse(openapisdk.models.shared.ListEventTrackersResponse listEventTrackersResponse) {
        this.listEventTrackersResponse = listEventTrackersResponse;
        return this;
    }
    public Long statusCode;
    public ListEventTrackersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}