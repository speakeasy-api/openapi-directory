package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscordPostDiscordPostRequest {
    public DiscordPostDiscordPostHeaders headers;
    public DiscordPostDiscordPostRequest withHeaders(DiscordPostDiscordPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscordMessageRequest request;
    public DiscordPostDiscordPostRequest withRequest(openapisdk.models.shared.DiscordMessageRequest request) {
        this.request = request;
        return this;
    }
}