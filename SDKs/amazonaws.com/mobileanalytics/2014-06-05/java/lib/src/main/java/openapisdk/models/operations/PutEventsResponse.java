package openapisdk.models.operations;



public class PutEventsResponse {
    public openapisdk.models.shared.BadRequestException badRequestException;
    public PutEventsResponse withBadRequestException(openapisdk.models.shared.BadRequestException badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}