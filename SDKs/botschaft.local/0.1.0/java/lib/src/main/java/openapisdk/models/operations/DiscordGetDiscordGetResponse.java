package openapisdk.models.operations;



public class DiscordGetDiscordGetResponse {
    public String contentType;
    public DiscordGetDiscordGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public DiscordGetDiscordGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public DiscordGetDiscordGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object discordGetDiscordGet200ApplicationJSONAny;
    public DiscordGetDiscordGetResponse withDiscordGetDiscordGet200ApplicationJsonAny(Object discordGetDiscordGet200ApplicationJSONAny) {
        this.discordGetDiscordGet200ApplicationJSONAny = discordGetDiscordGet200ApplicationJSONAny;
        return this;
    }
}