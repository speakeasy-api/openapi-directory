package openapisdk.models.operations;



public class GetEventItemsResponse {
    public String contentType;
    public GetEventItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventItemSearchResponse eventItemSearchResponse;
    public GetEventItemsResponse withEventItemSearchResponse(openapisdk.models.shared.EventItemSearchResponse eventItemSearchResponse) {
        this.eventItemSearchResponse = eventItemSearchResponse;
        return this;
    }
    public Long statusCode;
    public GetEventItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}