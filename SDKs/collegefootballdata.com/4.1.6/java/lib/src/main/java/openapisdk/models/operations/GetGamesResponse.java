package openapisdk.models.operations;



public class GetGamesResponse {
    public String contentType;
    public GetGamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Game[] games;
    public GetGamesResponse withGames(openapisdk.models.shared.Game[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public GetGamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}