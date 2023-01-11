package openapisdk.models.operations;



public class GetEventsResponse {
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSearchResponse eventSearchResponse;
    public GetEventsResponse withEventSearchResponse(openapisdk.models.shared.EventSearchResponse eventSearchResponse) {
        this.eventSearchResponse = eventSearchResponse;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}