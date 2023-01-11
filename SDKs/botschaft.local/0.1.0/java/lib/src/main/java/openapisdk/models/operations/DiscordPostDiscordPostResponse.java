package openapisdk.models.operations;



public class DiscordPostDiscordPostResponse {
    public String contentType;
    public DiscordPostDiscordPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public DiscordPostDiscordPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public DiscordPostDiscordPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object discordPostDiscordPost200ApplicationJSONAny;
    public DiscordPostDiscordPostResponse withDiscordPostDiscordPost200ApplicationJsonAny(Object discordPostDiscordPost200ApplicationJSONAny) {
        this.discordPostDiscordPost200ApplicationJSONAny = discordPostDiscordPost200ApplicationJSONAny;
        return this;
    }
}