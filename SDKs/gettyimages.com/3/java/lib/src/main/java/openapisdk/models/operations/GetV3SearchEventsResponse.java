package openapisdk.models.operations;



public class GetV3SearchEventsResponse {
    public String contentType;
    public GetV3SearchEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventsSearchResult eventsSearchResult;
    public GetV3SearchEventsResponse withEventsSearchResult(openapisdk.models.shared.EventsSearchResult eventsSearchResult) {
        this.eventsSearchResult = eventsSearchResult;
        return this;
    }
    public Long statusCode;
    public GetV3SearchEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}