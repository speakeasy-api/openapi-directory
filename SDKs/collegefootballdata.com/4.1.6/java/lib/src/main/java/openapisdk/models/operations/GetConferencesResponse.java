package openapisdk.models.operations;



public class GetConferencesResponse {
    public openapisdk.models.shared.Conference[] conferences;
    public GetConferencesResponse withConferences(openapisdk.models.shared.Conference[] conferences) {
        this.conferences = conferences;
        return this;
    }
    public String contentType;
    public GetConferencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConferencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}