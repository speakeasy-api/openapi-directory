package openapisdk.models.operations;



public class PlayerSearchResponse {
    public String contentType;
    public PlayerSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerSearchResult[] playerSearchResults;
    public PlayerSearchResponse withPlayerSearchResults(openapisdk.models.shared.PlayerSearchResult[] playerSearchResults) {
        this.playerSearchResults = playerSearchResults;
        return this;
    }
    public Long statusCode;
    public PlayerSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}