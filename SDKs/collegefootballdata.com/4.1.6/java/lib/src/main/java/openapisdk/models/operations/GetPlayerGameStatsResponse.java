package openapisdk.models.operations;



public class GetPlayerGameStatsResponse {
    public String contentType;
    public GetPlayerGameStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerGame[] playerGames;
    public GetPlayerGameStatsResponse withPlayerGames(openapisdk.models.shared.PlayerGame[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public GetPlayerGameStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}