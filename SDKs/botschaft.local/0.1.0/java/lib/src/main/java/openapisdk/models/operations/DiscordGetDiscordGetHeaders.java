package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscordGetDiscordGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public DiscordGetDiscordGetHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}