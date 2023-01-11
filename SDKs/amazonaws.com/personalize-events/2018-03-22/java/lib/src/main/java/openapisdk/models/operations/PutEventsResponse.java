package openapisdk.models.operations;



public class PutEventsResponse {
    public String contentType;
    public PutEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public PutEventsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public PutEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}