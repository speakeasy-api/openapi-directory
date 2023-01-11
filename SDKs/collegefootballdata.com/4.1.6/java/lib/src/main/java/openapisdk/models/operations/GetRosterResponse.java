package openapisdk.models.operations;



public class GetRosterResponse {
    public String contentType;
    public GetRosterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Player[] players;
    public GetRosterResponse withPlayers(openapisdk.models.shared.Player[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public GetRosterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}